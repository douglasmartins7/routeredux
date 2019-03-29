Conectar a react-router-dom ao redux para conseguirmos fazer a navegação atravez do redux-saga e redux-thunk. Fazer a navegação após a ação de um midleware do redux-thunk.

Duas rotas são importadas, o Main e o Profile

e

BUG

Error: Could not find router reducer in state tree, it must be mounted under "router"
▶ 18 stack frames were collapsed.
Module../src/index.js
src/index.js:5
  2 | import ReactDOM from 'react-dom';
  3 | import App from './App';
  4 | 
> 5 | ReactDOM.render(<App />, document.getElementById('root'));
  6 | 
  7 | 