import type { ViewStyle } from 'react-native';

/** Fragment of ViewStyle consumed by flex utilities — partial so plain literals type-check without assertions. */
export type Flex = Partial<Pick<ViewStyle, 'flex' | 'gap' | 'flexWrap' | 'alignContent' | 'alignSelf' | 'flexDirection' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'rowGap' | 'columnGap'>>;
