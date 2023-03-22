import {Dimensions, PixelRatio} from 'react-native';

export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;
export const dp = size =>
  PixelRatio.roundToNearestPixel(size * PixelRatio.get());
