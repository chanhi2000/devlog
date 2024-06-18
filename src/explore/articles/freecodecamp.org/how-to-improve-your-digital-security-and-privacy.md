---
lang: ko-KR
title: "How to Improve Your Digital Security and Privacy – Best Practices for Developers"
description: "Article(s) > How to Improve Your Digital Security and Privacy – Best Practices for Developers"
icon: fas fa-shield-halved
category: 
  - Security
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - security
  - sec
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to Improve Your Digital Security and Privacy – Best Practices for Developers"
    - property: og:description
      content: "How to Improve Your Digital Security and Privacy – Best Practices for Developers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-improve-your-digital-security-and-privacy.html
prev: /devops/security/articles/README.md
date: 2024-06-18
isOriginal: false
cover: https://www.freecodecamp.org/news/content/images/size/w2000/2024/05/digitalprivacy-1.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Security > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/security/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Improve Your Digital Security and Privacy – Best Practices for Developers"
  desc="These days, there are many different types of attacks that can jeopardize your digital security and privacy. So it’s a good idea to stay up-to-date with best practices to keep you safe online.  But it can be hard to understand exactly how to do this. So I built this..."
  url="https://freecodecamp.org/news/how-to-improve-your-digital-security-and-privacy/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://www.freecodecamp.org/news/content/images/size/w2000/2024/05/digitalprivacy-1.jpeg"/>

These days, there are many different types of attacks that can jeopardize your digital security and privacy. So it’s a good idea to stay up-to-date with best practices to keep you safe online.

But it can be hard to understand exactly how to do this. So I built this tutorial and this [<FontIcon icon="fas fa-globe"/>personal security/privacy assessment](https://loki2100.limesurvey.net/948232?lang=en), based on what I've learned building [<FontIcon icon="fas fa-globe"/>Loki Privacy](https://lokiprivacy.com/). These resources sum up thousands of hours of practice and research into five impactful (and largely free) steps. 

By following these guidelines, you can really increase your digital security and privacy, and perhaps help mitigate a devastating hack of your personal finances or data. 

---

## Here's What We'll Cover:

[[toc]]

---

## 1: Use Credentials Wisely

The first step is to properly manage your passwords, and add a layer of security with two-factor authentication.

Nowadays, digital passwords control an immense amount of power and personal information. You might access your bank and/or life savings with them, or critical and personal medical information about yourself. With great power as an Internet user comes great responsibility – and this is true of using modern passwords.

### Use a Password Manage

Ideally, password managers are the best system to manage your credentials. They offer encryption and security to prevent undesired access, and they're able to give two critical properties to good passwords.

- First, they give you the ability to auto-generate passwords and login with the password manager if chosen. This helps avoid the cardinal sin of personal security on the web: password reuse across multiple services. If one service gets hacked with your password and you're reusing it across the web, hackers will try your login/password across the web, potentially turning one hack into multiple. 
- Second is that password managers allow you to more easily create longer and more complex passwords.

Good options are services like 1Password and BitWarden. You can host your own version of BitWarden on your own server with something like StartOS [and the open source implementation of BitWarden, Vaultwarden (<FontIcon icon="iconfont icon-github"/>`Start9Labs/vaultwarden-startos`)](https://github.com/Start9Labs/vaultwarden-startos).

### Use a Strong Password

sThe number and type of characters in your password can prevent people brute-force attacking you – that is, using machines to guess letter combos. Password strength is very dependent on character length. [<FontIcon icon="fas fa-globe"/>If you use 14-16 characters](https://bitwarden.com/blog/how-long-should-my-password-be/) or more, it'll take a machine centuries to try to guess the password. But if you use 6 or fewer characters, it's likely your password can be cracked in seconds. 

Your password strength can also improve if you add special characters, vary the case from uppercase to lowercase, and add numbers – anything that throws off machines that are going through character combinations by rote, hoping to get lucky.

#### Examples of strong passwords

- 32-strings of random characters, ideally including numbers and special characters
- Multiple words strung together with some numbers/special characters to make it easy to work manually

#### Examples of weak passwords

- Commonly used and reused word + number combos, like hello12
- Shorter strings like 342yf – the shorter your combination even if seemingly random, the easier to brute force
- Passwords you use across multiple services no matter their strength (if one of the passwords gets leaked, that will be attempted with all of your services). 

### Setup Two-Factor Authentication

You should also add two-factor authentication throughout your devices, and ideally the strongest versions of these. That way, even if one of your passwords gets cracked, it won't matter – because attackers won't have access to a second factor that allows them into your account.

You'll also want to get notifications for failed login attempts. That way you'll know if somebody has cracked your password (and you'll want to remove that password from any online services you currently use.).

Normally, this would be a combination of what's called HOTP and TOTP two-factor authentication.

HOTP and TOTP are both different one-time password schemes used by either hardware security keys or 2FA apps like Google Authenticator. You'll have seen it in action if you use a tool like Aegis or Raivo where you get resetting passcodes that you copy and paste into your browser every 30 seconds.

The difference between the two is that the HOTP code scheme tends to be used with hardware security keys and increments per use. But this leaves a longer time window where an attacker can breach the code.

Time-based systems only give you between 30 seconds to 60 seconds to login with the code, but the user is given enough time to retry codes given such a short window. Some of the most secure elements combine both HOTP and a time-based window.

::: note Takeaway

Probably the best things you can do for your digital security right now are:

- Have a password manager system that allows you to avoid password reuse
- Have two-factor authentication either through an app (such as Aegis or Raivo) or if you're willing to invest, a hardware security key like a Yubico. 

:::

---

## 2: Choose Your Browser Wisely

Next, you'll want to think about the browser you’re using and what data you're revealing about yourself.

### Use a Security-focused Browse

The browser you use to access the Internet stores data about you and shares data about who you are and what your interests are. Your choice of browser and the extensions you load will determine how much ad tracking you allow through, as well as the number of cookies.

A default installation of Firefox, Chrome, or Safari won't have much in the way of privacy-preserving features. But you can download extensions such as Privacy Badger, https everywhere, and uBlock Origin to help you better defend your online privacy and security.

These tools will serve as script-blockers and ad-blockers, as well as a guarantee that you'll be browsing sites where your data is encrypted – an important consideration when we get to point 3.

### Consider using a VPN

Also, if you're using your regular Internet without a VPN or without using a service like Tor, you're likely revealing your IP address and your MAC address. 

The IP address is malleable, but can reveal roughly where you are. IPInfo, for example, shows that you can tie an IP address [<FontIcon icon="fas fa-globe"/>to your location](https://ipinfo.io/ip-address-information) with the latitude and longitude represented, the company providing your Internet, and perhaps the business that owns the IP address.

Your MAC address is tied to your device and is relatively static. When you put on a VPN or use Tor, you can show a different IP address than the one tied to your home network or insecure open networks like the Wifi at your local coffee shop. But depending on the VPN you use, you could be giving them access to every site you visit – so it's important to ensure that you work with a provider that has a no-logs policy such as MullvadVPN.

::: note Takeaway

If you're concerned about digital privacy and security, use a privacy-focused browser variant either on desktop or mobile. This could be something like Librewolf and Duckduckgo on mobile. 

:::

Your default search engine should not be Google. It should be Duckduckgo or a more privacy-focused variant (though note that Duckduckgo will still serve ads through Microsoft's ad exchange).

You should also understand the implications of giving off your IP address and MAC address. Make sure you evaluate whether or not using Tor or a VPN makes sense for you. Consider carefully the VPN you choose.

---

## 3: Understand Encryption and What it Means

The term "Encryption" is often bandied about. But you might be wondering how it really matters to you.

Well, when it comes to digital privacy and security, understanding the difference between https:// and http://, cleartext vs. hashed text, and end-to-end encryption matters a lot.

### HTTP vs HTTPS

Let's start with https:// over http://. Why does it matter what type of site you're browsing?

HTTP powers the web. Essentially, when you're browsing the Internet, under the hood your device is making a series of HTTP requests to servers you direct it to. With regular http:// traffic, however, anytime somebody sees HTTP requests and communications, [<FontIcon icon="fas fa-globe"/>they can see the text within](https://www.cloudflare.com/learning/ssl/why-is-http-not-secure/). This means that if you were sending passwords, credit card information, or other sensitive communications, it would be trivial to intercept those messages.

HTTPS, on the other hand, signs HTTP with encryption keys using a [<FontIcon icon="fa-brands fa-free-code-camp"/>method called TLS](https://freecodecamp.org/news/what-is-tls-transport-layer-security-encryption-explained-in-plain-english/). The short of it is that if you're using https:// and browsing sites everywhere with https:// (which an extension like HTTPs Everywhere can help force), that you're less likely to leak your data to attackers. <!-- TODO: 작성 (/explore/articles/freecodecamp.org/what-is-tls-transport-layer-security-encryption-explained-in-plain-english.md) -->

### Cleartext vs Hashed Text

You'll often hear about cleartext vs hashed text when it comes to explaining a password breach. Cleartext means that if an attacker gets ahold of password data, they have your password in its full-text form. If it's hashed, that means the attacker will get a bunch of symbols that aren't your password but perhaps with some work, they can get to your password in plaintext.

If a website is storing your passwords in plaintext, it means that attackers that get a database full of passwords will be able to easily use that stash right away. A cleartext/plaintext leak means that you need to immediately change your passwords with much more urgency, though even if a password is hashed, you should still switch it over. 

Services like haveibeenpwned.com will help you determine which password leaks apply to an email – and it's good to check every once in a while to see if you have any compromised credentials (some password managers will automatically check this for you as well.).

End-to-end encryption is a technical term that seems complex but delivers a simple promise: within the codebase, only the sender and receiver of a message will be able to see and decrypt the original message. This means that the service the messages are hosted on can't see what is being transmitted, and therefore can't send over that information to anybody. 

Services like Signal offer end-to-end encryption by default (including in group chats) and are seen as the gold standard. WhatsApp also offers end-to-end encryption by default, though its association with Meta sometimes gets privacy advocates wary.

Other services offer variants, but you have to trigger them – for example, Telegram has end-to-end encryption for "Secret chats", but not group chats and non-secret private chats. 

::: note Takeaway

Make sure you're browsing on https:// sites with a browser extension ([<FontIcon icon="fas fa-globe"/>HTTPs Everywhere](https://www.eff.org/https-everywhere)). Also, check to see if your passwords have been compromised and how they've been compromised with [<FontIcon icon="fas fa-globe"/>HaveIBeenPwned.com](https://haveibeenpwned.com/). And stick to end-to-end encryption on chat and communications if you want to make sure the people you want to see your communications are the only ones that do.

:::

---

## 4: How You Spend Your Money Digitally Leaves a Trace

Online, one frontier for digital privacy is how you spend and own money. In the analog world, you can spend cash and rest assured that it is unlikely that your transaction will be traced back to you.

In the digital world, however, you have the burden of a credit card or debit card linked back to your address and names for every transaction you do. While online security has been developed to ensure that these don't leak (though they still can and have), there are also new ways to transact online with a (relatively) privacy-preserving option: Bitcoin, Lightning Network.

Lightning Network is a second layer technology built on Bitcoin that doesn't record its transactional flow between nodes on-chain, but rather settles channel opens/closes on it. This allows you to transact Bitcoin rapidly, without a fee, and not have your each transaction show up on the Bitcoin chain.

Now, the nuances of how to use tools like Lightning Network and Bitcoin in a way that preserves privacy merits a much fuller discussion – but be aware that a tradeoff now exists. 

Yes, using Bitcoin will expose you to broadcasting your transactions over a public ledger, one scanned by perhaps millions of people. But it will also allow you to transact with the IP address of your choice, the device of your choice, and the identity of your choice. It's up to you to do the legwork and determine if that's a tradeoff worth having. 

::: note Takeaway

Be aware that there are alternatives to using a credit card or debit card online for all of your payments that are closer to how you might use cash in the analog world.

:::

## 5: The Devices You Use Do Matter for Privacy and Security

Lastly, the devices you're using do matter for privacy and security. The Internet is a tradeoff: you get access to many different services, but you subject the devices you're using to access these services to giving off and receiving data.

Most of the commercialized laptops and phones out there have privacy and security features built in. An example of this is hardware changes that make recent iPhones more resilient, or frequent security updates for the operating system in question, from Linux, Microsoft, to Mac, to iOS and Android.

The tradeoff with devices, though, tends to be the expense, cost, and maintenance. In theory, having a second device on both laptop and mobile (for travel purposes, for example, to avoid border seizures) is ideal. And you may want to experiment with different operating systems – for example, the privacy-focused GrapheneOS for mobile, and System76 or Pinebooks for Linux-based laptops.

You might even go further and decide to experiment with home-based servers to run your own services.

Ultimately, the choice is yours: the cost of experimentation here can be high in terms of time and money spent, but can be well-worth it to maintain control over your own devices and data. 

::: note Takeaway

Consider the devices you use. Make sure you're on top of security updates, and determine how and which devices you want to use going forward.

:::

---

## Wrapping Up

If you're interested in learning a bit more about how your digital security and privacy stacks up, [<FontIcon icon="fas fa-globe"/>this assessment will](https://loki2100.limesurvey.net/948232?lang=en) help you determine your level and give you specific recommendations.

The most important thing about digital security and privacy is to be mindful of the tradeoffs, and to consider and often re-evaluate best practices in an actively evolving ecosystem.

---

<TagLinks />