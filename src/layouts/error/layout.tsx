import { PropsWithChildren } from 'react';
import Main from './main';

// ----------------------------------------------------------------------

export default function ErrorLayout({ children }: PropsWithChildren) {
  return <Main>{children}</Main>;
}
