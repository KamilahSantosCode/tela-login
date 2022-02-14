//passa as imagens
//no key deveria ter um id, como não temos colocamos o índice do vetor
import { useCallback, useEffect, useMemo, useState } from 'react'
import {Card} from '../componentes/card'
 export default function Pokedex() {
    const pokemon = {
        name: 'Ditto',
        img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
        order: 203
    }

    const pokemons =[
        pokemon,
        pokemon,
        pokemon,
        pokemon,
        pokemon,
        pokemon
    ]
       
    return (
        <div  className="container">
            <h1 className="text-center" id="titulo">Pokemons</h1>

            <div id="cards" className="row" >
                {pokemons.map((poke, indice)=> (
                    <Card key={indice} name={poke.name} image={poke.img} order = {poke.order} />
                ))}                

            </div>
        </div>
       
    )
    
 }