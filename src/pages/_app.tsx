import { AppProps } from 'next/dist/next-server/lib/router/router'
import { FC } from 'react'
import { AnimatePresence } from 'framer-motion'

import GlobalStyles from 'styles/global'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
    <GlobalStyles />
  </>
)

export default App
