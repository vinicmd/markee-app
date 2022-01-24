import styled, { css } from 'styled-components/macro'

export const Aside = styled.div`
  width: 330px;
  height: 100vh;
  padding: 32px;

  background-color: ${({ theme }) => theme.colors.black};
`
export const Button = styled.button`${({ theme }) => css`
  align-items: center;
  display: flex;
  color:  ${theme.colors.lightBlack};
  background-color: ${theme.colors.primary};
  font-size: 1.4rem;
  border: 0;
  border-radius: 4px;
`}`
