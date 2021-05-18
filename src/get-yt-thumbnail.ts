const THUMB_TYPES = <const>[
  /** w1280 */
  'maxresdefault.jpg',
  /** w640 */
  'sddefault.jpg',
  /** w480 */
  'hqdefault.jpg',
  /** w320 */
  'mqdefault.jpg',
  /** w120 */
  'default.jpg',
];

type ThumbTypes = typeof THUMB_TYPES[number];

/**
 * @param videoId
 * @return
 */
export default async (
  videoId: string,
  thumbType?: ThumbTypes,
) => {
  /**
   * @param src
   * @return
   */
  const loadImage = (src: string) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = (e) => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = src;
    });
  };

  const startIndex: number = (() => {
    if (thumbType !== undefined) {
      return THUMB_TYPES.indexOf(thumbType);
    }

    return 0;
  })();

  for (let i = startIndex; i < THUMB_TYPES.length; i++) {
    const fileName = `https://img.youtube.com/vi/${videoId}/${THUMB_TYPES[i]}`;

    const res: HTMLImageElement | void = await loadImage(fileName).catch((e) => {
      console.log('onload error', e);
      return;
    });

    if (
      !THUMB_TYPES[i + 1]
      || (<HTMLImageElement>res).width > 120
    ) {
      return fileName;
    }
  }
};
