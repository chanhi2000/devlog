---
lang: ko-KR
title: Digital Clock
description: Snippets > Digital Clock
icon: fas fa-clock
category: 
  - CSS
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
  - time
prev: /programming/css/snippets/README.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CSS > Snippets",
  "desc": "Snippets",
  "link": "/programming/css/snippets/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

::: normal-demo Digital Clock

```json
{
  "csslib": [
    "https://fonts.googleapis.com/css?family=Orbitron"
  ]
}
```

```html
<!--Display day information e.g Wednesday March 12,2021-->
<section>
  <div id="dayIntro">
    <p id="dayName"></p>
  </div>
  <div class="container">
    <!-- Display time -->
    <div class="dispClock">
      <div id="time"></div>
    </div>
  </div>
</section>
```

```css
```

```js
const clock = document.getElementById("time");
const dayIntro = document.getElementById("dayName");

setInterval(currentTime, 1000);

function currentTime() {
  let time = new Date();   // creating object of Date class
  let dayName=time.getDay();
  let month=time.getMonth();
  let year=time.getFullYear();
  let date=time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  var am_pm = "AM";
  if (hour==12)
    am_pm = "PM";
  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  //value of current time
  let currentTime = hour + ":" + min + ":" + sec +" "+ am_pm;

  // value of present day(Day, Month, Year)
  var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  var presentDay=week[dayName]+", "+months[month]+" "+date+", "+year;

  clock.innerHTML = currentTime;
  dayIntro.innerHTML = presentDay;
}

currentTime();  //calling currentTime() function to initiate the process
```

```css
/* Google font */
@import url('https://fonts.googleapis.com/css?family=Orbitron');

* { margin: 0;padding: 0; }
section { display: grid; place-items: center; }
#dayIntro {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 3px;
  border: 7px solid rgb(17,129,134);
  border-radius: 10px;
  margin: 20px;
  font-family: 'Times New Roman', Times, serif;
  padding: 15px;
  background: linear-gradient(180deg, #a8b9d3,rgb(173, 227, 229));
}
.container {
  height: 120px;
  width: 550px;
  position: relative;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  border-radius: 10px;
  cursor: default;
}
.container .dispClock,.container {
}
.container .dispClock {
  top: 50%;
  height: 105px;
  width: 535px;
  background: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  border-radius: 6px;
  text-align: center;
}
.dispClock #time {
  line-height: 85px;
  color: #fff;
  font-size: 70px;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

:::

---

<TagLinks />