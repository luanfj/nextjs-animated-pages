import { FC } from 'react'

import ListProductsCart, {
  ProductProps
} from 'components/product/ListProductsCart'
import * as S from './styles'

export interface HomeTemplateProps {
  products: ProductProps[]
}

const HomeTemplate: FC<HomeTemplateProps> = ({ products }) => (
  <S.ProductsContainer>
    <h1>Selecione um produto:</h1>
    <ListProductsCart products={products} />
  </S.ProductsContainer>
)

export default HomeTemplate
