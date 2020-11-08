import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProductsContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 30px;
  }
`
