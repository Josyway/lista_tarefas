import { styled } from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Opcoes = styled.div`
  margin-bottom: 16px;
  color: #666666;
  p {
    margin-bottom: 8px;
    font-weight: bold;
  }

  label {
    margin-right: 8px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`

export const Botao = styled.button`
  background-color: #44bd32;
  color: #fff;
  border-radius: 8px;
  align-items: center;
  font-size: 18px;
  padding: 8px;
  margin-top: 8px;
`
