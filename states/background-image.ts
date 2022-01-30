import { atom } from 'recoil';

export const backgroundImageState = atom<StaticImageData | null>({
  key: 'backgroundImageState',
  default: null,
});
