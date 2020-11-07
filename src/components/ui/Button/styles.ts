import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

const buttonVariants = {
  primary: css`
    background-color: #2d89fa;
    color: #fff;
  `,
  empty: css`
    background: transparent;
    color: #424550;
  `
}

export const Container = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  height: 48px;
  padding: 0 48px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.6px;

  ${({ variant }) => buttonVariants[variant]}
`
