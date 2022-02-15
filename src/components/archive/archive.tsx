import * as S from './styles'
import { File } from 'resources/files/types'

export function Archive ({ name }: File) {
  return (
    <S.Container>
      <S.Details>
        <S.Icon />
        <S.FileName>
          {name}
        </S.FileName>
      </S.Details>
      <S.ActionIcon />
    </S.Container>
  )
}
