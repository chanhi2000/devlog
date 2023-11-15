---
lang: ko-KR
title: 🔮Snippets
description: 🧶Node.js > 🔮Snippets
tags: ["js", "javascript", "nodejs", "node", "react", "reatjs"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## YouTube

Paste the entire script to the Chrome DevTool (<kbd>F12</kbd>) Console

### `deleteVideoFromWatchLater`

1. move to `/playlist?list=WL`
2. Paste the code to the console

```js
function deleteVideoFromWatchLater() {
    video = document.getElementsByTagName('ytd-playlist-video-renderer')[0];
    video.querySelector('#primary button[aria-label="Action menu"]').click();
    var things = document.evaluate(
        '//span[contains(text(),"Remove from")]',
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );
    for (var i = 0; i < things.snapshotLength; i++) {
        things.snapshotItem(i).click();
    }
}

async function deleteWatchLater() {
  // Fiddle with these if you'd like
  let batchSize = 200; // Number to delete at once before waiting
  let waitBetweenBatchesInMilliseconds = 1000 * 60 * 5; // 5 minutes
  let waitBetweenDeletionsInMilliseconds = 500; // Half a second

  let totalWaitTime = ((5000 / batchSize) * (waitBetweenBatchesInMilliseconds / 1000 / 60)) + (5000 * (waitBetweenDeletionsInMilliseconds / 1000 / 60))
  console.log(`Deletion will take around ${totalWaitTime.toFixed(0)} minutes to run if the playlist is full.`);

  let count = 0;
  while (true) {
    await new Promise(resolve => setTimeout(resolve, waitBetweenDeletionsInMilliseconds));
    deleteVideoFromWatchLater();
    count++;

    if (count % batchSize === 0 && count !== 0) {
      console.log('Waiting for 5 minutes...');
      await new Promise(resolve => setTimeout(waitBetweenBatchesInMilliseconds));
    }
  }
}

deleteWatchLater();
```

### `findChannelImages`

1. move to any channel `/@<CHANNEL_NAME>`
2. Paste the code to the console

```js
const channelId = document.querySelector('.meta-item.ytd-c4-tabbed-header-renderer yt-formatted-string').innerHTML.replace('@', '')
const channelName = document.querySelector('.ytd-channel-name yt-formatted-string').innerHTML
const profileImg = document.querySelector('#channel-header-container img').src
const bannerImg = getComputedStyle(document.querySelector('ytd-c4-tabbed-header-renderer')).getPropertyValue('--yt-channel-banner').replace('url(', '').replace(')', '');

console.log(JSON.stringify(
  {
    channel: {
      id: channelId,
      name: channelName,
      profile: profileImg,
      banner: bannerImg
    },
    videos: [

    ]
  }
))
```

### `findChannelProfileImage`



<TagLinks />
