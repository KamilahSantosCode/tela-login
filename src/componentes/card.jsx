//poke refere-se ao pokemon do arquivo pokedex
//mostrar informações na tela
export function Card (poke) {
    
    return(
        <div  className="col-12 col-sm-6 col-md-4">
        <div className="card">
            <img
            id="imagem"
            className="bg-success imagemCard"
            src={poke.image} 
            alt={poke.name}
            title={poke.name}/>
            <h3 className="text-center" id="nome">Nome: {poke.name}</h3> 
            {/* <h3 className="text-center" id="ordem">Ordem: {poke.order}</h3>  */}

        </div>
        
    </div>
                     
    )
    
}
