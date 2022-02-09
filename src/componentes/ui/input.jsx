//COMPONENTE GENÉRICO =>sempre vai criar a mesma estrutura para difereentes valores
//Poderia ter colocado qualquer nome

export const Input = (props) => {
    // const{
    //     label,
    //     type,
    //     id,
    //     name,
    //     placeholder
    // } = props

   
    //console.log(props)

    return(
        <div className="form">
            <div className="form-group">
            <label className="form-label" htmlFor={ props.id}> {props.label} </label>

            <input type={props.type} id={props.id} name= {props.name} placeholder={props.placeholder} /> 
            </div>
        </div>
    )
}