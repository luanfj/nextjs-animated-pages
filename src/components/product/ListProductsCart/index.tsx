import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import * as S from './styles'

export interface ProductProps {
  id: string
  name: string
  image: string
  price: string
}

export interface ListProductCartsProps {
  products: ProductProps[]
}

const ListProductsCart: FC<ListProductCartsProps> = ({ products }) => (
  <S.ProductCartWrapper>
    {products.map(product => (
      <Link
        key={product.id}
        href="/products/[id]"
        as={`/products/${product.id}`}
      >
        <S.ProductCartContainer>
          <Image
            quality="85"
            width={180}
            height={180}
            layout="fixed"
            src={product.image}
            alt={product.name}
          />
          <S.ProductInfo>
            <p>{product.name}</p>
            <p>Proteín</p>
            <p>{product.price}</p>
          </S.ProductInfo>
        </S.ProductCartContainer>
      </Link>
    ))}
  </S.ProductCartWrapper>
)

export default ListProductsCart
