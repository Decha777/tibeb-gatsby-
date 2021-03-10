import React from 'react'
import styled from 'styled-components/macro';

const CustomButton = styled.button`
  width:${prop => prop.btnWidth ? prop.btnWidth : ''};
  text-transform: uppercase;
  background: transparent;
  color: var(--clr-tertiary-1);
  padding: 1rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid var(--clr-tertiary-1);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  :hover {
    color: var(--clr-white);
    background: var(--clr-tertiary-1);
  }
  :disabled{
    display:none;
  }
`;

export default function Button({ children, ...restProps }) {
  return <CustomButton {...restProps}>{children}</CustomButton>
}