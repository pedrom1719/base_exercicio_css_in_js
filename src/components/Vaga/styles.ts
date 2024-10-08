import styled from 'styled-components'
import '../../global'

export const VagaItem = styled.li`
   {
    border: 1px solid var(--corPrincipal);
    background-color: var(--corSecundaria);
    color: var(--corPrincipal);
    padding: 16px;
    transition: all ease 0.3s;
    border-radius: 8px;

    &:hover {
      background-color: var(--corPrincipal);
      color: var(--corSecundaria);
    }

    &:hover a {
      border-color: var(--corPrincipal);
      background-color: var(--corSecundaria);
      color: var(--corPrincipal);
    }
  }

  .vagaTitulo {
    font-weight: bold;
    margin-bottom: 16px;
  }

  .vagaLink {
    border-color: var(--corSecundaria);
    background-color: var(--corPrincipal);
    color: var(--corSecundaria);
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
    }
  }
`
