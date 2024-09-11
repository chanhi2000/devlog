---
lang: ko-KR
title: "Shodan – What to Know About the Internet’s Most Dangerous Search Engine"
description: "Article(s) > Shodan – What to Know About the Internet’s Most Dangerous Search Engine"
icon: fas fa-shield-halved
category: 
  - Security
  - Python
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - security
  - sec
  - python
  - py
  - shodan
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Shodan – What to Know About the Internet’s Most Dangerous Search Engine"
    - property: og:description
      content: "Shodan – What to Know About the Internet’s Most Dangerous Search Engine"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/shodan-what-to-know-about-the-internets-most-dangerous-search-engine.html
prev: /devops/security/articles/README.md
date: 2024-09-10
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725990169364/3181020e-abd0-4943-a461-830c2a416035.png
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

```component VPCard
{
  "title": "Python > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/py/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="Shodan – What to Know About the Internet’s Most Dangerous Search Engine"
  desc="Shodan is a search engine that discovers devices connected to the internet. In this article, we’ll look at why it’s both a valuable tool and a potential threat. When you hear the term “search engine,” your mind likely jumps to Google, Bing, or Yahoo..."
  url="https://freecodecamp.org/news/shodan-what-to-know-about-the-internets-most-dangerous-search-engine/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725990169364/3181020e-abd0-4943-a461-830c2a416035.png"/>

<!-- TODO: 작성-->

<!-- 
<p>Shodan is a search engine that discovers devices connected to the internet. In this article, we’ll look at why it’s both a valuable tool and a potential threat.</p>
<p>When you hear the term “search engine,” your mind likely jumps to Google, Bing, or Yahoo. These platforms are familiar to most of us, helping us find websites, images, and news.</p>
<p>But there’s another search engine out there, one that most people have never heard of. And it’s a lot more powerful and dangerous. It’s called <a target="_blank" href="https://www.shodan.io/">Shodan</a>.</p>
<p>Shodan is a database of online devices, many of which are not meant to be public. The scary thing about Shodan is that it can have one of your devices, too.</p>
<p>Let’s look at what Shodan is, how it works, and why it’s both a valuable tool and a potential threat.</p>
<h3 id="heading-what-is-shodan">What is Shodan?</h3>
<p>Shodan is a search engine that discovers devices connected to the internet. This includes everything from simple webcams and routers to complex industrial control systems.</p>
<p>Traditional search engines index websites. Shodan scans the internet for devices and lists them based on their IP addresses, open ports, and other publicly available data.</p>
<p>Shodan works by scanning the internet using specific protocols to identify connected devices. It collects all information about the device.</p>
<p>These include IP addresses, open ports, and even the software versions in use. This data is then made searchable by allowing users to query the database. You can look for specific types of devices or vulnerabilities using Shodan’s UI or the CLI tool.</p>
<p>Let’s look at how you can use Shodan both via the web interface and the command line.</p>
<h3 id="heading-how-to-use-the-shodan-web-interface">How to Use the Shodan Web Interface</h3>
<p>Go to <a target="_blank" href="https://www.shodan.io">shodan.io</a> and create an account. While some searches are possible without an account, you’ll need to log in to access most features. </p>
<p>Also, you will need a premium account to find most devices, and the results of the free plan are very limited.</p>
<p><img src="https://cdn-images-1.medium.com/max/1600/1*aPocvl3SmA9HSCw-hiEITg.png" alt="Shodan Home Page" width="1600" height="786" loading="lazy"></p>
<p>On the homepage, you will see a simple search bar. You can type in general queries like “default password” or “webcam” to see what Shodan can find.</p>
<p>For example, typing “default password” will list devices with default settings. They are vulnerable to unauthorized access.</p>
<p>Shodan also allows you to filter results with specific parameters. For example:</p>
<ul>
<li><p><strong>Search for specific devices</strong>: If you’re looking for webcams, you might type “webcam country:US”. This query will return webcams located in the United States.</p>
</li>
<li><p><strong>Search by IP address:</strong> To see details about a specific IP, type the IP address into the search bar.</p>
</li>
<li><p><strong>Search by port:</strong> To find devices with a specific port open, use a query like “port:22”. This will find devices with SSH (port 22) exposed to the Internet.</p>
</li>
</ul>
<p>After executing a search, Shodan will present a list of matching devices. Each result includes the IP address, open ports, and the software on the device.</p>
<p>For example, a search for “port:22” might find SSH servers and their configuration details.</p>
<p><img src="https://cdn-images-1.medium.com/max/1600/1*dQ9aYtNI0ZklPcqXFPhoCw.png" alt="Shodan search results" width="1600" height="830" loading="lazy"></p>
<h3 id="heading-how-to-use-the-shodan-command-line-interface-cli">How to Use the Shodan Command-Line Interface (CLI)</h3>
<p>For advanced users, Shodan provides a command-line interface (CLI). It lets you search and automate tasks.</p>
<p><strong>Note: API usage may be limited based on your account and you might have to pay to use it.</strong></p>
<p>Before you can use the CLI, you will need to install it. You can do this using Python’s package manager, pip. Open your terminal and type the following.</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">pip install shodan
</code></pre>
<p>Once installed, you can see if it works by trying the help command. </p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">shodan -h
</code></pre>
<p><img src="https://cdn-images-1.medium.com/max/1600/1*j-AeWDwmtsLvczJEj1U2yQ.png" alt="Shodan help" width="1306" height="842" loading="lazy"></p>
<p>Now you have to add your Shodan CLI with your API key. You can find your API key on your <a target="_blank" href="https://account.shodan.io/">Shodan account page</a>. To set it up, use the following command:</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">shodan init YOUR_API_KEY
</code></pre>
<p>Now you can start searching. Here’s an example of a basic search:</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">shodan search "default password"
</code></pre>
<p>This command will return devices with “default password” in their banners. This often indicates poor security practices.</p>
<p>You can search for devices with specific characteristics as before:</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">shodan search "port:80 country:US"
</code></pre>
<p>This command finds web servers (port 80) located in the United States.</p>
<p>To get detailed information about a specific IP address, use this command:</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">shodan host 8.8.8.8
</code></pre>
<p>It will return all known data about the specified IP. This includes open ports and detected services.</p>
<p>To see more commands or debug CLI issues, <a target="_blank" href="https://help.shodan.io/command-line-interface/0-installation">here is the official documentation from Shodan</a>.</p>
<h3 id="heading-the-good-the-bad-and-the-dangerous">The Good, the Bad, and the Dangerous</h3>
<p>Shodan is a double-edged sword. It’s a powerful tool for cybersecurity professionals. It also poses significant risks if used with bad intent.</p>
<p>Security teams use Shodan to find exposed devices within their networks. It allows them to patch vulnerabilities before someone can exploit them.</p>
<p>Researchers can track vulnerabilities or malware by monitoring devices on Shodan.</p>
<p>Unfortunately, Shodan can also be a hacker’s dream. Hackers can use Shodan to locate devices exposed to the Internet. These include webcams, servers, and even industrial control systems.</p>
<p>A worrying fact about Shodan is its ability to find industrial control systems. An Industrial Control System (ICS) controls and monitors industrial processes. It’s the “brain” behind machines in factories, power plants, and water treatment plants.</p>
<p>Shodan has found thousands of unsecured, internet-connected industrial control systems (ICS). In some cases, these systems had no password or used default credentials.</p>
<p>Shodan has also indexed thousands of security cameras, database servers, and IoT devices. These raise serious privacy and security concerns. All these can be easily exploited if not properly secured.</p>
<p>To protect your own devices, you must understand Shodan. You need to know how it works and what it can find.</p>
<p>So, how can you prevent Shodan from exposing your devices?</p>
<p><strong>1. Change Default Credentials</strong>: Always change the default usernames and passwords on your devices.</p>
<p>2. <strong>Use Strong Passwords</strong>: Avoid weak passwords. Use a mix of letters, numbers, and symbols, and consider using a password manager.</p>
<p>3. <strong>Disable Unnecessary Services</strong>: If your device has services you don’t use, disable them. This reduces the number of potential vulnerabilities.</p>
<h2 id="heading-conclusion">Conclusion</h2>
<p>Shodan is a powerful tool. It’s a reminder that any device connected to the internet is potentially exposed. It offers useful insights for cybersecurity experts but also an opportunity for cybercriminals.</p>
<p>Knowing what Shodan can do should make you take cybersecurity seriously. In a world where everything is connected, your security is only as strong as your weakest device. Stay informed, stay updated, and most importantly, stay safe.</p>
<p><em>Join the</em> <a target="_blank" href="https://www.stealthsecurity.sh/"><strong><em>Stealth Security newsletter</em></strong></a> <em>for more articles on offensive and defensive cybersecurity. To learn how to build a career in Cybersecurity, check out</em> <a target="_blank" href="https://book.stealthsecurity.sh/"><strong><em>The Hacker's Handbook</em></strong></a><em>.</em></p>
-->

---

<TagLinks />