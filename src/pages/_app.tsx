import { AppProps } from 'next/dist/next-server/lib/router/router'
import { FC } from 'react'

import GlobalStyles from 'styles/global'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
)

export default App
