import { FC } from 'react'
import { motion } from 'framer-motion'

import ListProductsCart, {
  ProductProps
} from 'components/product/ListProductsCart'
import * as S from './styles'

export interface HomeTemplateProps {
  products: ProductProps[]
}

const easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInUp = {
  initial: {
    y: 60,
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

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const HomeTemplate: FC<HomeTemplateProps> = ({ products }) => (
  <S.ProductsContainer
    exit={{ opacity: 0 }}
    initial="initial"
    animate="animate"
  >
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <h1>Selecione um produto:</h1>
    </motion.div>
    <motion.div variants={stagger}>
      <ListProductsCart products={products} />
    </motion.div>
  </S.ProductsContainer>
)

export default HomeTemplate
