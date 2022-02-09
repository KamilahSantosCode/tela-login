import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
//import {App }from './componentes/app';//com chave exporta algo do projeto que não é padrão na página = export{app}
import App from './componentes/app';//tem que colocar export default App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();