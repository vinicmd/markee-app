import styled, { css } from 'styled-components/macro'

function App () {
  return (
    <Title>teste</Title>
  )
}

const Title = styled.h1`${({ theme }) => css`
  background: ${theme.colors.lightBlack};
  color: ${theme.colors.primary}
`}`

export { App }
