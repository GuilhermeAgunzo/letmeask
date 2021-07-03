import { ButtonHTMLAttributes } from 'react'

// import './styles.scss'
import { StyledButton } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({isOutlined = false, ...props}: ButtonProps) {
  return (
    <StyledButton isOutlined={isOutlined} {...props} />
  );
}