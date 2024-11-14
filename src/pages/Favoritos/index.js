import { useEffect, useState }from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';

import './favoritos.css';

function Favoritos(){

    const[filmes, setFilmes] = useState([])


    useEffect(() =>{

        const minhaLista = localStorage.getItem("@primeFlix");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function exluirFilme(id){
        let filtroFilmes = filmes.filter((item) =>{
            return(item.id !== id)
        } )

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso.")
    }


    return(
        <div className='meus-filmes'>            

            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>LISTA VAZIA :( </span>}

            <ul>
                {filmes.map((item) =>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={() =>exluirFilme(item.id)}>Excluir</button>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;