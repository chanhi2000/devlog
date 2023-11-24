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

### `findChannelInfo`

1. move to any channel `/@<CHANNEL_NAME>`
2. Paste the code to the console

```js
const channelId = document.querySelector('.meta-item.ytd-c4-tabbed-header-renderer yt-formatted-string').innerHTML.replace('@', '')
const channelName = document.querySelector('.ytd-channel-name yt-formatted-string').innerHTML
const profileImg = document.querySelector('#channel-header-container img').src
const bannerImg = getComputedStyle(document.querySelector('ytd-c4-tabbed-header-renderer')).getPropertyValue('--yt-channel-banner').replace('url(', '').replace(')', '');

const o = {
  channel: {
    id: channelId,
    name: channelName,
    profile: profileImg,
    banner: bannerImg
  },
  videos: [

  ]
};

console.log(JSON.stringify(o))
copy(JSON.stringify(o))
```

### `findAllVideosFromPlaylist`

1. move to any playlist
2. Paste the following code to the console

```js
const playlistTitle = document.querySelector('.thumbnail-and-metadata-wrapper .metadata-wrapper.style-scope.ytd-playlist-header-renderer yt-formatted-string').innerHTML.replace(/&amp;/g, '&');

const videos = Array.from(document.querySelector('ytd-browse[page-subtype="playlist"] #primary #contents.style-scope.ytd-playlist-video-list-renderer').querySelectorAll('ytd-playlist-video-renderer'))
.map((e) => {
  const vInfo = e.querySelector('a#video-title')
  return {
    id: vInfo.href.match(/(?<=https\:\/\/www.youtube.com\/watch\?v=)(.*)(?=\&list=)/g).join(''),
    title: vInfo.innerHTML.match(/(?<=          )(.*)/g).join('').replace(/&amp;/g, '&')
  }
})
const oPlaylist = {
  title: playlistTitle,
  videos: videos
}
console.log(JSON.stringify(videos[0]))
copy(JSON.stringify(oPlaylist))
```

### `findAllVideosFromWatchLater`

1. move to [`/playlist?list=WL`](https://www.youtube.com/playlist?list=WL)
2. Paste the following code to the console

```js
const videos = Array.from(document.querySelector('ytd-browse[page-subtype="playlist"] #primary #contents.style-scope.ytd-playlist-video-list-renderer').querySelectorAll('ytd-playlist-video-renderer'))
.map((e) => {
  const vInfo = e.querySelector('a#video-title')
  const cInfo = e.querySelector('.ytd-channel-name.complex-string a.yt-simple-endpoint.style-scope.yt-formatted-string')
  return {
    channelId: cInfo.href.replace('https://www.youtube.com/@', ''),
    channelName: cInfo.innerHTML,
    id: vInfo.href.match(/(?<=https\:\/\/www.youtube.com\/watch\?v=)(.*)(?=\&list=)/g).join(''),    
    title: vInfo.innerHTML.match(/(?<=          )(.*)/g).join('').replace(/&amp;/g, '&')
  }
})
console.log(JSON.stringify(videos[0]))
copy(JSON.stringify(videos))
```



<TagLinks />
