//passa as imagens
//no key deveria ter um id, como não temos colocamos o índice do vetor
//https://pokeapi.co/api/v2/pokemon?limit=12&offset=0 //numero de pokemons e começa da página 0
import { useCallback, useEffect, useMemo, useState } from 'react'
import {Card} from '../componentes/card'
import { Botao } from '../componentes/ui/botao'
import {getImagePokemon} from '../utils/helpers'

const  URL_INICIAL ='https://pokeapi.co/api/v2/pokemon?limit=12&offset=0'


 export default function Pokedex() {
    const[dados, setDados] = useState(null)//array de pokemons, para armazenar dados// o useState detecta se há useEffect no arquivo
//o array chama pokemon

    const [paginaAtual, setPaginaAtual] = useState(URL_INICIAL)

    //useEffect garante que aquilo será lido na página, ao menos uma vez
    //biblioteca axios
    // async await => espera a função ser executada para pular para a próxima linha
    //.then = traz o resultado esperado .catch resultado erro .finally executa de todo jeito, uma ação final
    useEffect(() => {       
        async function chamarPokemon (){
            try{
                const promise = await fetch(paginaAtual)//retorna um objeto, uma promise
                const resultado = await promise.json()//recebeu o objeto da API em formato jason
                setDados(resultado)
            }catch(error) {
                console.log('Deu erro')
            }
        }chamarPokemon()
    },[paginaAtual])//coloca paginaAtual para atentar quanto as mudanças ocoorridas com essa variável, além de que o setpaginaAtual está fora do useEffect, dessa forma não entra em loop

    function trocarPagina (url){
        setPaginaAtual(url)

    }
    if(dados == null){
        return <p>Carregando Pokemoons</p>
    }

       //HOOK = GANCHO
       //useEffect() ler o código assim que a página é acessada e observar as dependências dele, além de ter um retorno opcional
       //sempre que usar o useEffect, mesmo que não tenha uma dependência, com o colchete para não cair em loop
         
    return (
        <div  className="container">
            <h1 className="text-center" id="titulo">Pokemons</h1>

            <div id="cards" className="row" >
                {dados?.results?.map((poke, indice)=> (
                    <Card 
                    key={indice} 
                    {...poke}//Recebe os atributos de pke, como name e url
                    // name={poke.name} 
                    image={getImagePokemon(poke.url)}  />
                ))}    
            </div>
            <div className='mb-5'>
                {/* if dentro do DOM*/}
                {dados.previous &&(<Botao id='bntAnt' noGroup handleClick={() => trocarPagina(dados.previous) } className="me-3">Anterior</Botao>)}
                {dados.next && (<Botao id='bntNext ' noGroup = {true} handleClick={() => trocarPagina(dados.next)} >Próximo</Botao>   )}           
            
            </div>
            
        </div>
        
       
    ) }