//Criando componentes em react
//function App(){}
//Forma antiga: class App extends Component{}
//Irá fazer as chamadas

import 'bootstrap/dist/css/bootstrap.min.css'
//import '../assets/styles.css'
import Login from '../pages/login'
import Pokedex from '../pages/pokedex'

const App =()=>{
    const esta_logado = JSON.parse(localStorage.getItem('USER'));
    //JSON.stringify()//transforma o objeto em string
    //JSON.parse //transforma string em objeto

    if(esta_logado){
        return <Pokedex/>
    }
    return<Login/>      
}

export default App

