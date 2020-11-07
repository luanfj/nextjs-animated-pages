import { FC } from 'react'

import * as S from './styles'

export interface ButtonProps {
  variant?: 'primary' | 'empty'
}

const Button: FC<ButtonProps> = ({ children, variant = 'primary' }) => (
  <S.Container variant={variant}>{children}</S.Container>
)

export default Button
