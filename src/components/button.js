// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"

const Button = styled.button`
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: ${styleVars.colors.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  cursor: pointer;
  padding: 15px 20px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  align-content: flex-start;
  transition: background 0.1s ease-in-out, transform 0.15s ease-out;

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    background: ${styleVars.colors.grey[100]};
  }
`

const Icon = styled.img`
  height: 15px;
  margin-right: 10px;
`

const Text = styled.span``

type Props = {
  className?: string,
  text: string,
  icon?: any,
  iconAlt?: string,
  onClick?: () => void,
}

const ButtonLink = ({ className, text, icon, iconAlt, onClick }: Props) => (
  <Button className={className} onClick={onClick}>
    {icon && iconAlt && <Icon src={icon} alt={iconAlt} />}
    <Text>{text}</Text>
  </Button>
)

export default ButtonLink
