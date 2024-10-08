import styled from 'styled-components'
import '../../global'

const Header = styled.header`
  background-color: var(--corSecundaria);
  color: var(--corPrincipal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <Header>
    <h1>EBAC Jobs</h1>
  </Header>
)

export default Cabecalho
