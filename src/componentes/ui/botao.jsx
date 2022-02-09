
export const Botao = (props) => {
    //props.children
    return(
        <div className="form-group">
            <button className="btn">{props.children}</button>
        </div>
    )
}