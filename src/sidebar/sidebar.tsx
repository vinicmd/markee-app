import { File } from 'resources/files/types'
import * as S from './sidebar-style'
import logoText from './logo-text.svg'

function Sidebar () {
  const files: File[] = [
    {
      id: '1',
      name: 'README.md',
      content: 'Conteudo README',
      active: true,
      status: 'saved',
    },
    {
      id: '2',
      name: 'LICENSING.md',
      content: 'Conteudo LICENSING',
      active: false,
      status: 'editing',
    },
  ]
  console.log(files)

  return (
    <S.Aside>
      <S.Link href='/'>
        <img src={logoText} alt='Markee App logo' />
      </S.Link>

      <S.H2>
        <span>Arquivos</span>
      </S.H2>

      <S.Link href=''>
        <S.Button>+  Adicionar arquivo</S.Button>
      </S.Link>

    </S.Aside>
  )
}

export { Sidebar }
