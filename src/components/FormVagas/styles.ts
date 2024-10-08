import styled from 'styled-components'
import '../../global'

export const FormSection = styled.div`
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: var(--corSecundaria);
    padding: 32px;
    border-radius: 12px;
    margin-top: 40px;
  }

  .btnPesquisar {
    background-color: var(--corPrincipal);
    border: 1px solid var(--corPrincipal);
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: var(--corSecundaria);
    margin-left: 8px;
    cursor: pointer;
  }

  .campo {
    padding: 0 16px;
    outline-color: var(--corPrincipal);
  }
`
