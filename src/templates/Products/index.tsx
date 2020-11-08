import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ReactHtmlParser from 'react-html-parser'

import { ProductProps } from 'components/product/ListProductsCart'
import Button from 'components/ui/Button'
import { fadeInUp, stagger } from 'templates/Home'
import * as S from './styles'

export interface ProductsTemplateProps {
  product: {
    details: string
  } & ProductProps
}

const Products: FC<ProductsTemplateProps> = ({ product }) => (
  <S.Container exit={{ opacity: 0 }} initial="initial" animate="animate">
    <S.PreviewContainer>
      <motion.div variants={fadeInUp}>
        <Image
          quality="85"
          width={400}
          height={400}
          layout="intrinsic"
          src={product.image}
          alt={product.name}
        />
      </motion.div>
    </S.PreviewContainer>
    <S.Content>
      <S.Wrapper variants={stagger}>
        <motion.div variants={fadeInUp} style={{ display: 'flex' }}>
          <Link href="/">Voltar ao início</Link>
        </motion.div>
        <S.Category variants={fadeInUp}>Proteín</S.Category>
        <motion.div variants={fadeInUp}>
          <h1>{product.name}</h1>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <p>{ReactHtmlParser(product.details)}</p>
        </motion.div>

        <S.Tags>
          <motion.span variants={fadeInUp}>Soy Free</motion.span>
          <motion.span variants={fadeInUp}>Gluten Free</motion.span>
        </S.Tags>

        <S.QuantityPrice>
          <S.Quantity>
            <motion.div variants={fadeInUp}>+</motion.div>
            <motion.div variants={fadeInUp}>1</motion.div>
            <motion.div variants={fadeInUp}>-</motion.div>
          </S.Quantity>

          <S.Price variants={fadeInUp}>{product.price}</S.Price>
        </S.QuantityPrice>

        <S.ButtonsArea>
          <Button variants={fadeInUp}>Adicionar ao carrinho</Button>
          <Button variant="empty" variants={fadeInUp}>
            Lista de Desejos
          </Button>
        </S.ButtonsArea>
      </S.Wrapper>
    </S.Content>
  </S.Container>
)

export default Products
