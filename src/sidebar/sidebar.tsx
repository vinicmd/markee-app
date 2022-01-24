import * as S from './sidebar-style'

import logoText from './logo-text.svg'

function Sidebar () {
  return (
    <S.Aside>
      <img src={logoText} alt='Markee App logo' />
      <S.Button>+  Adicionar arquivo</S.Button>
    </S.Aside>
  )
}

export { Sidebar }
