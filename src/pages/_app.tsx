import { AppProps } from 'next/dist/next-server/lib/router/router'
import { FC } from 'react'
import { AnimatePresence } from 'framer-motion'

import GlobalStyles from 'styles/global'

const App: FC<AppProps> = ({ Component, pageProps, router }) => (
  <>
    <AnimatePresence>
      <Component {...pageProps} key={router.route} />
      <GlobalStyles />
    </AnimatePresence>
  </>
)

export default App
