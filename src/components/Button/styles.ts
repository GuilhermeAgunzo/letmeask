import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 5.0rem;
  border-radius: 8px;
  font-weight: 500;
  background: ${(props) => props.isOutlined ? '#FFF' : '#835afd'};
  color: ${(props) => props.isOutlined ? '#835afd' : '#FFF'};
  padding: 0 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: ${(props) => props.isOutlined ? '1px solid #835afd' : 0};

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`