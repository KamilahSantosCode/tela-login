const ButtonInner =(props)=>{
    const {children, handleClick, className} = props 
        return(
            <button 
            className={`btn btn-primary mt-3 ${className}`} //mt-3 gera uma margem na parte de cima
            onClick={handleClick}
            >{children}</button>
        
    )
        }

export const Botao = (props) => {
    
    if(props.noGroup){
        return <ButtonInner {...props}/>
    }
    return( 
        <div className="form-group">
            <ButtonInner {...props}/>
        </div>
    )
}