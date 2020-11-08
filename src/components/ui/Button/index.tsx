import { FC } from 'react'

import * as S from './styles'

export interface ButtonProps {
  variant?: 'primary' | 'empty'
  variants?: any
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  variants
}) => (
  <S.Container variant={variant} variants={variants}>
    {children}
  </S.Container>
)

export default Button
