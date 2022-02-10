//COMPONENTE GENÉRICO =>sempre vai criar a mesma estrutura para difereentes valores
//Poderia ter colocado qualquer nome

export const Input = (props) => {

    const handleChange = (event) => {
        //const valor= event.target.value 
        const {value} = event.target//registra as alterações
        props.setValue(value)
        
    }

    return(
        <div className="form">
            <div className="form-group">
            <label className="form-label" htmlFor={ props.id}> {props.label} </label>

            <input type={props.type} 
            onChange={handleChange}
            id={props.id} name= {props.name} placeholder={props.placeholder} /> 
            </div>
        </div>
    )
}