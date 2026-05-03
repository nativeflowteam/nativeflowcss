import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export function textSnippet<const T extends TextStyle>(s: T): T {
  return s;
}

export function viewSnippet<const T extends ViewStyle>(s: T): T {
  return s;
}

export function imageSnippet<const T extends ImageStyle>(s: T): T {
  return s;
}
