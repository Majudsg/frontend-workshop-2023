import { useParams } from "react-router-dom"

export default function ReadById() {
    const { id } = useParams()
    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`

    //Implementar o carregamento da API
    //Guardar info recebida da API em um estado 
    //Exibir essas informações no JSX

    return <div>ReadById: {id}</div>
}