import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProductCartWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const ProductCartContainer = styled(motion.div)`
  width: 250px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  position: relative;

  & + & {
    margin-left: -1px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 50%;
    background-color: #c0c2c4;
    transition: height 0.2s, background-color 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 50%;
    background-color: #c0c2c4;
    transition: height 0.2s, background-color 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    &:after,
    &:before {
      height: 80%;
      background-color: #ababab;
      z-index: 1;
    }
  }

  @media only screen and (max-width: 600px) {
    & + & {
      margin-top: 30px;
    }
  }
`

export const ProductInfo = styled(motion.div)`
  position: relative;
  bottom: 0;

  p {
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 18px;
    color: #000;
    margin-top: 10px;

    &:nth-child(1) {
      font-weight: 600;
      font-size: 25px;
    }

    &:nth-child(2) {
      color: #b1b1b1;
      font-size: 15px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 16px;

      &:nth-child(1) {
        font-size: 20px;
      }
    }
  }
`
