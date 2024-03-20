---
lang: ko-KR
title: Tips > Simulate the Window Controls Overlay feature for PWA
description: Node.js > Tips > Simulate the Window Controls Overlay feature for PWA
icon: fas fa-lightbulb
category:
  - Node.js
  - Tips
tag: 
  - js
  - debug
  - tips
  - css
  - apps
---

# {{ $frontmatter.title }} 관련


[[toc]]

---

```component VPCard
{
  "title": "Simulate the Window Controls Overlay feature for PWA",
  "desc": "Devtools Tips > Simulate the Window Controls Overlay feature for PWA",
  "link": "https://devtoolstips.org/tips/en/simulate-pwa-wco/",
  "logo": "https://devtoolstips.org/assets/logo-small.png",
  "background": "rgba(31,44,43,0.2)"
}
```

If you're building a desktop PWA, you might want to use the [Window Controls Overlay](https://developer.mozilla.org/docs/Web/API/Window_Controls_Overlay_API) (WCO) feature to make your app look more native. With WCO, you gain control over the entire surface area of the installed app window, and can display your own title bar.

The only difficulty is testing the feature. To test your new title bar when using WCO, you actually need to install the app on your device first, but also test what the app looks like on all operating systems (macOS, Windows, Linux) because the title bar will look different on each.

The <FontIcon icon="iconfont icon-select"/>`[Application]` tool in both Chrome and Edge let you simulate the WCO feature so that you don't have to leave the comfort of your browser and can test what your app will look like when installed on any OS.

To simulate WCO:

1. Open the PWA where you're using the WCO feature in Chrome or Edge.
2. Open DevTools and go to the <FontIcon icon="iconfont icon-select"/>`[Application]` tool.
3. Select the <FontIcon icon="iconfont icon-select"/>`[Manifest]` tab in the sidebar.
4. Scroll down to the <FontIcon icon="iconfont icon-select"/>`[Window Controls Overlay]` section, at the bottom of the panel.
5. Select the <FontIcon icon="iconfont icon-select"/>`[Emulate the Window Controls Overlay]` checkbox.
6. Select the operating system you want to simulate.

The OS-specific window controls will appear in the webpage, and your CSS code will work as if the `env(titlebar-area-*)` environment variables were set. To learn more about the CSS environment variables you can use with WCO, see [Using env() to ensure content is not obscured by window control buttons in desktop PWAs](https://developer.mozilla.org/docs/Web/CSS/env#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas) on MDN.

![Edge, DevTools is opened, the Application tool shows the WCO section, and the WCO overlay is simulated in the page](https://devtoolstips.org/assets/img/simulate-pwa-wco.png)

---

<TagLinks />