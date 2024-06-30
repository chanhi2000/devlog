---
lang: ko-KR
title: How to read user contacts with ContactAccessButton
description: Article(s) > How to read user contacts with ContactAccessButton
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to read user contacts with ContactAccessButton
    - property: og:description
      content: How to read user contacts with ContactAccessButton
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-read-user-contacts-with-contactaccessbutton.html
next: /explore/articles/hackingwithswift.com/swiftui/introduction-to-accessibility-with-swiftui.md
date: 2024-06-21
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to read user contacts with ContactAccessButton | SwiftUI by Example",
  "desc": "How to read user contacts with ContactAccessButton",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-read-user-contacts-with-contactaccessbutton",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**New in iOS 18**

SwiftUI has a dedicated `ContactAccessButton` for displaying and adding contacts in your app, along with a `contactAccessPicker()` modifier for adjusting access later on.

::: important

You should use `ContactAccessButton` initially because it's a really smooth way of reading contacts at the point they are needed, then bring in `contactAccessPicker()` only if needed.

:::

To get started, open the Info tab in your app's target and add the key "Privacy - Contacts Usage Description". You should set this to a string that explains why your app needs access to contacts, so that iOS can automatically show this message when a request is made.

When it comes to the code, you need to do three things:

1. Add an import for ContactsUI.
2. Place a `ContactAccessButton` with a query string and some kind of action to run when a contact is selected.
3. Create a function that's able to receive an array of contact identifiers and turn them into actual `CNContact` instances by using `CNContactStore`.

This works best when the user is actually searching for something, so that `ContactAccessButton` matches the same search query you are running elsewhere in your UI.

Here's a complete example to get you started:

```swift
struct ContentView: View {
    // We hold all our loaded contacts here
    @State private var allContacts = [CNContact]()

    // Whatever the user is currently looking for
    @State private var searchText = ""

    // Results from our existing contacts list
    var filteredContacts: [CNContact] {
        if searchText.isEmpty {
            allContacts
        } else {
            allContacts.filter {
                $0.givenName.localizedStandardContains(searchText)
                || $0.familyName.localizedStandardContains(searchText)
            }
        }
    }

    var body: some View {
        NavigationStack {
            VStack {
                List(filteredContacts) { contact in
                    Text("Say hello to \(contact.givenName)")
                }
                .searchable(text: $searchText)

                // This will automatically show a contact if one is matched, or a Search button otherwise
                ContactAccessButton(queryString: searchText) { results in
                    // Run fetchContacts(with:) when a contact is selected
                    fetchContacts(with: results)
                }
                .padding()
            }
        }
    }

    // Converts an array of contact identifiers into actual contacts
    func fetchContacts(with identifiers: [String]) {
        Task {
            // Prepare the Contacts system to return the names of matching people
            let keys = [CNContactFormatter.descriptorForRequiredKeys(for: .fullName)]
            let fetchRequest = CNContactFetchRequest(keysToFetch: keys)
            fetchRequest.predicate = CNContact.predicateForContacts(withIdentifiers: identifiers)

            // Store new contacts in this array
            var newContacts = [CNContact]()

            try CNContactStore().enumerateContacts(with: fetchRequest) { contact, _ in
                newContacts.append(contact)
            }

            // Load is completed, so add the new contacts to our existing array
            allContacts += newContacts
        }
    }
}
```

As you can see, most of the work happens in the `fetchContacts(with:)` method – `ContactAccessButton` wraps all the UI part, but actually loading the data is still a bit of a slog. It would be nice if Apple could simplify this a little so that `ContactAccessButton` could be given a list of keys to fetch, and send back `CNContact` objects pre-filled with that data.

::: note

Once the user has clicked Add for a given contact, it's down to you to store that contact safely – they will *not* be shown for future search results.

:::

Once you have your `ContactAccessButton` in place, you can customize it using standard SwiftUI modifiers such as `font()` and `foregroundStyle()`, alongside new modifiers such as `contactAccessButtonCaption()` and `contactAccessButtonStyle()`.

For example, this displays a contact's email address below their name, and also uses indigo to tint user images when they don't have a photo attached:

```swift
ContactAccessButton(queryString: searchText) { results in
    fetchContacts(with: results)
}
.contactAccessButtonStyle(.init(imageColor: .indigo))
.contactAccessButtonCaption(.email)
```

As an alternative to `ContactAccessButton`, the `contactAccessPicker()` modifier lets us present a list of the user's contacts in a privacy-safe way – it's controlled by the system rather than us – so that the user can add or remove many contacts at once.

::: important

This API reports back to you only the contacts that were new, which means it won't include contacts added previously or contacts that were removed. Apple hasn't given us a way to handle those removals, other than manually requesting all known contacts every time and seeing what comes back.

:::

So, I would be careful using this API: yes, it's a great way to mass add or remove contacts, but you should be sure to validate the user's selection fully each time results are returned.

For example, this code queries the contacts store by merging the new identifiers will existing identifiers, so we can detect when the user has request a contact be removed:

```swift
struct ContentView: View {
    @State private var allContacts = [CNContact]()
    @State private var showingContactsPicker = false

    var body: some View {
        NavigationStack {
            List(allContacts) { contact in
                Text("Say hello to \(contact.givenName)")
            }
            .toolbar {
                Button("Select Contacts", systemImage: "person.crop.circle.badge.plus") {
                    showingContactsPicker.toggle()
                }
            }
            .contactAccessPicker(isPresented: $showingContactsPicker) { results in
                fetchContacts(with: results)
            }
        }
    }

    func fetchContacts(with newIdentifiers: [String]) {
        Task {
            // Create an array of all identifiers, old and new
            let existingIdentifiers = allContacts.map(\.identifier)
            let allIdentifiers = existingIdentifiers + newIdentifiers

            let keys = [CNContactFormatter.descriptorForRequiredKeys(for: .fullName)]
            let fetchRequest = CNContactFetchRequest(keysToFetch: keys)
            fetchRequest.predicate = CNContact.predicateForContacts(withIdentifiers: allIdentifiers)
            var newContacts = [CNContact]()

            try CNContactStore().enumerateContacts(with: fetchRequest) { contact, _ in
                newContacts.append(contact)
            }

            allContacts = newContacts
        }
    }
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to read the user's location using LocationButton | SwiftUI by Example",
  "desc": "How to read the user's location using LocationButton",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-read-the-users-location-using-locationbutton.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to read the size and position of a scrollview | SwiftUI by Example",
  "desc": "How to read the size and position of a scrollview",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-read-the-size-and-position-of-a-scrollview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to make VoiceOver read characters individually | SwiftUI by Example",
  "desc": "How to make VoiceOver read characters individually",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-voiceover-read-characters-individually.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to read the red, green, and blue values from a Color | SwiftUI by Example",
  "desc": "How to read the red, green, and blue values from a Color",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-read-the-red-green-and-blue-values-from-a-color.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />