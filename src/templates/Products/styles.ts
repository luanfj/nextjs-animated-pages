import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  align-content: stretch;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const PreviewContainer = styled.div`
  flex: 1;
  width: 100%;
  min-width: 300px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfdfdf;

  img {
    width: 400px;
  }
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
  min-width: 300px;

  @media only screen and (max-width: 600px) {
    margin: 20px 0;
  }
`

export const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  a {
    color: #282828;
    text-decoration: none;
    margin-bottom: 120px;
  }

  h1 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    color: #424550;
    font-weight: 300;
  }
`

export const Category = styled(motion.div)`
  text-transform: uppercase;
  font-size: 15px;
  color: #424550;
  font-weight: 500;
  margin-bottom: 32px;
`

export const Tags = styled.div`
  margin: 24px 0;

  span {
    color: #424550;

    & + span {
      margin-left: 16px;
    }
  }
`

export const QuantityPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;

  div {
    color: #787878;
    cursor: default;

    &:nth-child(1),
    &:nth-child(3) {
      padding: 6px;
      margin: 8px 16px;
      height: 24px;
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
    }

    &:nth-child(3) {
      border: 1px solid #282828;
      cursor: pointer;
    }
  }
`

export const Price = styled(motion.div)`
  color: #282828;
  font-weight: 700;
  font-size: 14px;
`

export const ButtonsArea = styled.div`
  margin-top: 72px;
  display: flex;
  align-items: center;

  button + button {
    margin-left: 24px;
  }
`
