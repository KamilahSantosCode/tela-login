//COMPONENTE GENÉRICO =>sempre vai criar a mesma estrutura para difereentes valores
//Poderia ter colocado qualquer nome

export const Input = (props) => {

    const handleChange = (event) => {
        //const valor= event.target.value 
        const {value} = event.target//registra as alterações
        props.setValue((VALOR_ANTERIOR) => ({//o parêntese amarelo substitui o return
            ...VALOR_ANTERIOR,//salva todo o histórico dos objetos
            [props.name] : value
        }))        
    }
    //... = SPREAD
    return(
        
            <div className="form-group">
            <label className="form-label" htmlFor={ props.id}> {props.label} </label>

            <input type={props.type} 
            className="form-control"
            onChange={handleChange}
            //defaultValue={props.value} ou value={props.value}, o value tem maior prioridade, no entanto a forma correta é o defaultValue
            defaultValue={props.value}
            id={props.id} name= {props.name} placeholder={props.placeholder} /> 
            </div>
        
    )
}