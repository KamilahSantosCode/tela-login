import { useState } from "react"
import { Botao } from "../componentes/ui/botao"
import { Input } from "../componentes/ui/input"


const Login = () => {

    const [param_1, param_2] = useState('valor_inicial')
    //param 1 nome da minha variável
    //param 2 função para alterar o valor param 1

    const [valores, setValores] = useState({})

    console.log('VALORES', valores)

    function handleSave() {
        if(valores.email && valores.password){
        localStorage.setItem('USER', JSON.stringify(valores))
        //converte objeto para string
        //console.log('clicou', valores)
        //grava no local Storage
        window.location.reload()//recarrega a pagina

        }else if(valores.email){
            alert('Preencher campo senha')
        }else if(valores.password){
            alert('Preencher campo email')
        }
        else{
            alert('Preencher campo de email e senha')
        }
        

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 offset-md-4 col-md-4" >
                    <h1 >Login</h1>

                    <div className="form">
                        <Input setValue={setValores} value={valores.email} label="Email:" type="text" id="email" name="email" placeholder="Seu email" />

                        <Input setValue={setValores} value={valores.password} label="Senha:" type="password" id="password" name="password" placeholder="Sua senha" />

                        <Botao handleClick={handleSave}>Acessar</Botao>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Login