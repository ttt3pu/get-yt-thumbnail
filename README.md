# get-yt-thumbnail

An util to get thumbnail uses YouTube video ID.

## usage

`getYtThumbnail(videoId, thumbType)`

- `videoId` (required) Any YouTube ID
- `thumbType` (optional) Get less than or equal to the size this.
  - `maxresdefault.jpg`
  - `sddefault.jpg`
  - `hqdefault.jpg`
  - `mqdefault.jpg`
  - `default.jpg`

```js
import getYtThumbnail from 'get-yt-thumbnail';

(async () => {
  // Get the largest size.
  const video = await getYtThumbnail('Any YouTube ID');
  console.log(video);

  // Get the largest size under sddefault.jpg.
  const video2 = await getYtThumbnail('Any YouTube ID', 'sddefault.jpg');
  console.log(video2);
})();
```
