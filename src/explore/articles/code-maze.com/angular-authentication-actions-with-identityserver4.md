---
lang: ko-KR
title: Angular Authentication Actions with IdentityServer4
description: Article(s) > Angular Authentication Actions with IdentityServer4
icon: fa-brands fa-angular
category: 
  - Node.js
  - Angular.js
  - C#
  - Article(s)
tag: 
  - blog
  - code-maze.com
  - node
  - nodejs
  - node-js
  - angular
  - angularjs
  - angular-js
  - cs
  - c#
  - csharp
head:  
  - - meta:
    - property: og:title
      content: Article(s) > Angular Authentication Actions with IdentityServer4
    - property: og:description
      content: Angular Authentication Actions with IdentityServer4
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/code-maze.com/angular-authentication-actions-with-identityserver4.html
prev: /programming/js-angular/articles/README.md
date: 2021-12-27
isOriginal: false
cover: /images/content/code-maze.com/angular-authentication-actions-with-identityserver4/banner.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Angular.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-angular/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Angular Authentication Actions with IdentityServer4"
  desc="In this article, we are going to learn about Angular authentication implementation with the Login and Logout actions, and menu modifications."
  url="https://code-maze.com/angular-authentication-actions-with-identityserver4/"
  logo="/images/content/code-maze.com/favicon.png"
  preview="/images/content/code-maze.com/angular-authentication-actions-with-identityserver4/banner.png"/>

In [the previous article](/explore/articles/code-maze.com/angular-oauth2-oidc-configuration-identityserver4.md), we have learned how to integrate an Angular application with IdentityServer4 and how to allow communication between these two projects. The configuration is prepared on both sides and as soon as we click the Login button, we get directed to the Login screen on the IDP level. But when we enter valid credentials, we get redirected to the Angular application on the Not Found (404) page. That’s because we didn’t finish the implementation of the Angular authentication actions. So, in this one, we are going to finish the Angular authentication implementation with the Login and Logout actions.

That said, we strongly recommend [reading the previous article](/explore/articles/code-maze.com/angular-oauth2-oidc-configuration-identityserver4.md) to keep track of all the things we implemented up until now.

Additionally, if you want to read the [entire IdentityServer4, OAuth2, and OIDC series](/explore/articles/code-maze.com/identityserver-4-series.md), feel free to do that and learn a lot more about the application security in ASP.NET Core.

::: info

To download the source code for this article, you can visit the [Angular Authentication with IdentityServer4 (<FontIcon icon="iconfont icon-github"/>`CodeMazeBlog/angular-identityserver4`)](https://github.com/CodeMazeBlog/angular-identityserver4/tree/angual-authentication-identityserver4) repository.

<SiteInfo
  name="CodeMazeBlog/angular-identityserver4"
  desc="This repo contains the source code for the 'Angular with IdentityServer4' series of articles on Code Maze"
  url="https://github.com/CodeMazeBlog/angular-identityserver4/tree/angual-authentication-identityserver4"
  logo="https://avatars.githubusercontent.com/u/29179238?v=4"
  preview="https://opengraph.githubassets.com/1e5a2c66415eaf85520fb3b5661bb000341bc94f928955a5494d4a8d8e1a9e31/CodeMazeBlog/angular-identityserver4"/>

:::

So, let’s start.

---

## Completing the Login Functionality in the Angular Authentication Process

If you inspect our work so far, you will find the code in the `AuthService` class and some modifications in the `app.component.ts` file to check for the authenticated user. This code provides the functionality to navigate to the IDP server and once we enter credentials, to navigate back to the Angular application. But as soon as we navigate back to the Angular application, we need to complete the signin process because we don’t want to navigate the user to the Not Found page. To do that, we have to process the response from the `/authorization` endpoint and populate the user object with the id and access tokens.

That said, let’s add a new function in the `AuthService` class:

```ts
public finishLogin = (): Promise<User> => {
  return this._userManager.signinRedirectCallback()
  .then(user => {
    this._user = user;
    this._loginChangedSubject.next(this.checkUser(user));
    return user;
  })
}
```

In this function, we call the `signinRedirectCallback` function that processes the response from the `/authorization` endpoint and returns a promise. From that promise, we extract the user object and populate the `_user` property. Additionally, we call the `next` function from the observable to inform any subscribed component about the Angular authentication state change, and finally, return that user.

### Adding Signin-Redirect-Callback Component

Now, we have to create the signin component, use this function, and react to the redirect action from the IDP server:

```sh
ng g c signin-redirect-callback --skipTests
```

We can remove the HTML and CSS files because we don’t need them, and modify the `.ts` file:

```ts{2-3,7,11,14-17}
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-redirect-callback',
  template: `<div></div>`
})
export class SigninRedirectCallbackComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this._authService.finishLogin()
    .then(_ => {
      this._router.navigate(['/'], { replaceUrl: true });
    })
  }
}
```

As you can see, we only have an empty div element for the template part and that’s the reason why we removed the HTML file. Additionally, in the `ngOnInit` function, we call the `finishLogin` function from the `AuthService` and just navigate the user to the home page. We set the `replaceUrl` property to true because we want to remove this component from the navigation stack.

After that, we have to add the route to this component in the `app.module.ts` file:

```ts
RouterModule.forRoot([
  { path: 'home', component: HomeComponent },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: '404', component : NotFoundComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
])
```

The value of the path property must match the value we assigned to the `redirect_uri` property of the `UserManager` settings in the `AuthService` class.

Now, we can test this.

- Let’s start the IDP server and the Angular application
- Once both started, we can click the Login link in the Angular menu
- After the Login screen appears, we should enter valid credentials and click the Login button
- Soon after, the application navigates us to the Home screen

Excellent.

We can check the logs, to verify what happens behind the scenes:

![Angular Authentication Login Console logs](/images/content/code-maze.com/angular-authentication-actions-with-identityserver4/11-Angular-Authentication-Login-Console-logs.png)

We can see the request to the `/token` endpoint that takes place after we finish the login action. Also, we can see the successful token validation and the call towards the `/userinfo` endpoint. The `given_name` and the `family_name` claims were returned to the client application.

---

## Adding Logout Functionality to the Angular Authentication Process

After we log in and land on the Home page, we can still see the Login link on the menu. This is not user-friendly at all, and there is no way to log out from the application (unless we manually clear the site’s data).

To fix this, let’s open the `AuthService` class and add two functions inside:

```ts
public logout = () => {
  this._userManager.signoutRedirect();
}

public finishLogout = () => {
  this._user = null;
  return this._userManager.signoutRedirectCallback();
}
```

In the `logout` function, we call the `signoutRedirect` function to redirect the flow to the IDP server to execute the logout action. Additionally, we create the `finishLogout` function, set the `_user` object to null, and call the `singoutRedirectCallback` function to finish the signout process.

Then, let’s navigate to the `menu.component.html` file, modify the Login link, and add the Logout link:

```html
<section> 
  <button *ngIf="!isUserAuthenticated" class="btn btn-link" style="color:gray" (click)="login()">Login</button>
  <button *ngIf="isUserAuthenticated" class="btn btn-link" style="color:gray" (click)="logout()">Logout</button> 
</section>
```

We also have to modify the `menu.component.ts` file:

```ts{2,7-10,17-19}
export class MenuComponent implements OnInit {
  public isUserAuthenticated: boolean = false;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.loginChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }

  public login = () => {
    this._authService.login();
  }

  public logout = () => {
    this._authService.logout();
  }
}
```

In the `ngOnInit` function, we subscribe to the `loginChanged` observable and set the `isUserAuthenticated` property. This will help our application decide which link to show (Login or Logout). Also, we have the `logout` function that just calls the `logout` function from the `AuthService` class.

### Singout-Redirect-Callback Component Creation

Now, as we did with the `signin-redirect-callback` component, we are going to create the `signout-redirect-callback` component:

```sh
ng g c signout-redirect-callback --skipTests
```

After the creation, let’s remove the `.html` and `.css` files and modify the `.ts` file:

```ts{2-3,7,11,14-17}
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout-redirect-callback',
  template: `<div></div>`
})
export class SignoutRedirectCallbackComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this._authService.finishLogout()
    .then(_ => {
      this._router.navigate(['/'], { replaceUrl: true });
    })
  }
}
```

That’s pretty much it. We just navigate to the home page as soon as this component initializes.

Finally, we have to add the route to this component in the `app.module.ts` file:

```ts{5}
RouterModule.forRoot([
  { path: 'home', component: HomeComponent },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
  { path: '404', component : NotFoundComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
])
```

Excellent.

Now, let’s start our applications and login with valid credentials.

Soon after that, the application redirects us to the Home page and the Logout button will appear:

![Logout button shows for the Angular Authentication](/images/content/code-maze.com/angular-authentication-actions-with-identityserver4/12-Logout-button-shows-for-the-Angular-Authentication.png)

Looks good.

Additionally, if we open the Developer Tools window and navigate to the Application tab, we can find the user object in the Session Storage menu:

![Angular Authentication Session Storage User Object](/images/content/code-maze.com/angular-authentication-actions-with-identityserver4/13-Angular-Authentication-Session-Storage-User-Object.png)

Finally, let’s click the Logout button.

As soon as we do that, the application redirects us to the IDP level, and then back to the Home page with the Login link displayed. Of course, you can inspect the Session Storage to confirm that the user object is removed.

---

## Inspecting Tokens

If we decode the access token, we can see what it consists of:

![Access Token Decoded](/images/content/code-maze.com/angular-authentication-actions-with-identityserver4/14-Access-Token-Decoded.png)

We can see the `not before (nbf)` and `expiry (exp)` properties both JSON time stamped. Then, we can see the `issuer (iss)` that points to the IDP server address. Of course, we won’t go through each of them, but you can pay attention to the `issuer (iss)` pointing to the IDP server URI, the `audience (aud)` that has the value of the API scope, `client_id`, the `subject identifier (sub)`, `scope` with all the supported scopes and `amr` (Authentication Methods References) with the password-based authentication (`pwd`) value.

We can also inspect the id_token:

![Id Token Decoded](/images/content/code-maze.com/angular-authentication-actions-with-identityserver4/15-Id-Token-Decoded.png)

Here, we can see many properties we already saw in the access token. Just to mention one thing, this time the audience (aud) property has a value of the client id and not the API scope.

We can extract all this information in our Angular application by using the `getUser` function from the `UserManager` class. If you inspect the `isAuthenticated` function in the `AuthService` class, you can see that the `getUser` function returns a promise with the user object inside. Once we extract that user object, we can access all these properties.

---

## Conclusion

Excellent job.

Now, we know how to create Login action with Angular and IdentityServer4 and what components we require to do so. Similarly, we have learned how to create a Logout action and what components it requires for the redirection purpose. Finally, we have inspected the id token and the access token to verify all the information they consist of.

In the next article, we are going to learn about [using the access token to secure communication between the Angular application and Web API](/explore/articles/code-maze.com/secure-angular-calls-to-webapi-using-access-token.md).

---

<TagLinks />