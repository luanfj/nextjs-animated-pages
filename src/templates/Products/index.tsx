import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ProductProps } from 'components/product/ListProductsCart'
import Button from 'components/ui/Button'
import * as S from './styles'

export interface ProductsTemplateProps {
  product: {
    details: string
  } & ProductProps
}

const Products: FC<ProductsTemplateProps> = ({ product }) => (
  <S.Container>
    <S.PreviewContainer>
      <Image
        quality="85"
        width={400}
        height={400}
        layout="intrinsic"
        src={product.image}
        alt={product.name}
      />
    </S.PreviewContainer>
    <S.Content>
      <S.Wrapper>
        <Link href="/">Voltar ao início</Link>
        <S.Category>Proteín</S.Category>
        <h1>{product.name}</h1>
        <p>{product.details}</p>

        <S.Tags>
          <span>Soy Free</span>
          <span>Gluten Free</span>
        </S.Tags>

        <S.QuantityPrice>
          <S.Quantity>
            <div>+</div>
            <div>1</div>
            <div>-</div>
          </S.Quantity>

          <S.Price>{product.price}</S.Price>
        </S.QuantityPrice>

        <S.ButtonsArea>
          <Button>aa</Button>
          <Button variant="empty">aa</Button>
        </S.ButtonsArea>
      </S.Wrapper>
    </S.Content>
  </S.Container>
)

export default Products
