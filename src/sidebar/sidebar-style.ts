import styled, { css } from 'styled-components/macro'

export const Aside = styled.div`
  width: 330px;
  height: 100vh;
  padding: 32px;

  background-color: ${({ theme }) => theme.colors.black};
`

export const H2 = styled.h2`${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  position: relative;
  padding-left: 20px;
  margin: 40px 0 32px;
  span {
    background-color: ${theme.colors.black};
    display: inline-block;
    position: relative;
    padding: 0 10px;
    z-index: 1;
  }
  &::before {
    background: ${theme.colors.primary};
    border-radius: 2px;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 0;
  }
`}`

export const DefaultButton = styled.button`
  cursor: pointer
`

export const Link = styled.a`
  text-decoration: none;
`

export const Button = styled(DefaultButton)`${({ theme }) => css`
  width: 100%;
  background: ${theme.colors.primary};
  border: 0;
  border-radius: 4px;
  padding: 8px 0;
  margin-bottom: 32px;
  font-size: 1.4rem;

  justify-content: center;
  color: ${theme.colors.lightBlack};
  transition: background 0.15s ease-in-out;

  display: flex;
  align-items: center;

  &:hover {
    background: ${theme.colors.primaryDark}
  }
`}`
