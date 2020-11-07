import GlobalStyles from 'styles/global'

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyles />
    </>
  )
]
