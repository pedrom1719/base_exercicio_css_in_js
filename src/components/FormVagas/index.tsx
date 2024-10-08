import { FormEvent, useState } from 'react'

import styled from 'styled-components'
import '../../global'

const FormSection = styled.div`
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

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormSection>
      <form className="form" onSubmit={aoEnviarForm}>
        <input
          className="campo"
          placeholder="Front-end, fullstack, node, design"
          onChange={(e) => setTermo(e.target.value)}
          type="search"
        />
        <button className="btnPesquisar" type="submit">
          Pesquisar
        </button>
      </form>
    </FormSection>
  )
}
export default FormVagas
