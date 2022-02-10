import { useState } from "react"
import { Botao } from "../componentes/ui/botao"
import { Input } from "../componentes/ui/input"


const Login = () => {

    const[param_1, param_2] = useState('valor_inicial')
    //param 1 nome da minha variável
    //param 2 função para alterar o valor param 1

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    console.log('EMAIL', email)
    console.log('SENHA', senha)

    return(
        <div className="container">

            <div id="txt">
            <h1 >Login</h1>
            </div>

            <div className="form">
                <Input setValue={setEmail} label="Email:" type="text" id="email" name="email" placeholder="Seu email"/>

                <Input setValue={setSenha} label="Senha:" type="password" id="password" name="password" placeholder="Sua senha"/>

                <Botao>Acessar</Botao> 

            </div>
        </div>
        
    )
}

export default Login