import styled from 'styled-components'
import { FiFileText } from 'react-icons/fi'

export const Container = styled.div`
  width: 100%;
  height: 37px;

  border-radius: 5px;
  margin-bottom: 16px;

  background-color: rgba(255, 255, 255, 0.05);

  display: flex;
  align-items: center;
`

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(FiFileText)`
  width: 24px;
  height: 24px;

  margin: 0 10px;

  color: ${({ theme }) => theme.colors.white}

`

export const FileName = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white}
`

export const ActionIcon = styled.div`

`
