import { GetServerSideProps } from 'next'

import api from 'services/api'

import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

const Home = (props: HomeTemplateProps): JSX.Element => (
  <HomeTemplate {...props} />
)

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/luanfj/json-server/products')

  return {
    props: {
      products: response.data
    }
  }
}

export default Home
