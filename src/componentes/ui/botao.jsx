
export const Botao = ({children, handleClick}) => {
    //props.children
    return(
        <div className="form-group">
            <button 
            className="btn btn-primary mt-3"//mt-3 gera uma margem na parte de cima
            onClick={handleClick}
            >{children}</button>
        </div>
    )
}