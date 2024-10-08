import styled from 'styled-components'
import '../../global'

export const VagasListSection = styled.div`
  .vagas {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    row-gap: 16px;
    margin-top: 32px;
  }

  @media (max-width: 768px) {
    .vagas {
      grid-template-columns: 1fr;
    }
  }
`
