import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { fadeInUp, stagger } from 'templates/Home'
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

const easing = [0.6, -0.05, 0.01, 0.99]

const imageFadeInUp = {
  initial: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

const ListProductsCart: FC<ListProductCartsProps> = ({ products }) => (
  <S.ProductCartWrapper>
    {products.map(product => (
      <Link
        key={product.id}
        href="/products/[id]"
        as={`/products/${product.id}`}
      >
        <S.ProductCartContainer variants={fadeInUp}>
          <motion.div className="img" variants={imageFadeInUp}>
            <Image
              quality="85"
              width={180}
              height={180}
              src={product.image}
              alt={product.name}
            />
          </motion.div>
          <S.ProductInfo variants={stagger}>
            <motion.p variants={fadeInUp}>{product.name}</motion.p>
            <motion.p variants={fadeInUp}>Proteín</motion.p>
            <motion.p variants={fadeInUp}>{product.price}</motion.p>
          </S.ProductInfo>
        </S.ProductCartContainer>
      </Link>
    ))}
  </S.ProductCartWrapper>
)

export default ListProductsCart
