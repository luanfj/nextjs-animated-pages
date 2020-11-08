import { GetServerSideProps } from 'next'

import api from 'services/api'

import ProductsTemplate, { ProductsTemplateProps } from 'templates/Products'

const Products = (props: ProductsTemplateProps): JSX.Element => (
  <ProductsTemplate {...props} />
)

export const getServerSideProps: GetServerSideProps = async context => {
  const { slug } = context.query

  const response = await api.get(`/luanfj/json-server/products/${slug}`)

  return {
    props: {
      product: response.data
    }
  }
}

export default Products
