import { GetServerSideProps } from 'next'

import api from 'services/api'

import ProductsTemplate, { ProductsTemplateProps } from 'templates/Products'

const Products = (props: ProductsTemplateProps): JSX.Element => (
  <ProductsTemplate {...props} />
)

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query
  const response = await api.get(`/wrongakram/demo/products/${id}`)

  return {
    props: {
      product: response.data
    }
  }
}

export default Products
