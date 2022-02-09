import { Botao } from "../componentes/ui/botao"
import { Input } from "../componentes/ui/input"


const Login = () => {
    return(
        <div className="container">

            <div id="txt">
            <h1 >Login</h1>
            </div>

            <div className="form">
                <Input label="Email:" type="text" id="email" name="email" placeholder="Seu email"/>

                <Input label="Senha:" type="password" id="password" name="password" placeholder="Sua senha"/>

                <Botao>Acessar</Botao> 

            </div>
        </div>
        
    )
}

export default Login