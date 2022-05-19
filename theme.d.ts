import 'styled-components';
import type { Theme } from '@admiral-ds/react-ui';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
