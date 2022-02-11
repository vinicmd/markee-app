import { Sidebar } from 'sidebar'
import styled from 'styled-components'

function App () {
  return (
    <Main>
      <Sidebar />
    </Main>
  )
}

export { App }

const Main = styled.main`
  display: flex;
  height: 100vh
`
