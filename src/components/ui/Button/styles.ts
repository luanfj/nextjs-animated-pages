import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { ButtonProps } from '.'

const buttonVariants = {
  primary: css`
    background-color: #2d89fa;
    color: #fff;

    &:hover {
      background-color: transparent;
      color: #2d89fa;
      border: 1px solid #2d89fa;
    }
  `,
  empty: css`
    background: transparent;
    color: #424550;

    &:hover {
      border: 1px solid #424550;
    }
  `
}

export const Container = styled(motion.button)<ButtonProps>`
  border: 1px solid transparent;
  border-radius: 8px;
  height: 48px;
  padding: 0 48px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.6px;
  transition: background-color 0.2s, color 0.2s, border 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  ${({ variant }) => buttonVariants[variant]}
`
