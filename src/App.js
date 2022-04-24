
import './App.css';
import { Router } from 'react-router';
import { Redirect,  Routes,Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomeTemplate/homePage';
import Login from './containers/HomeTemplate/login/Login';
// import { Counter } from './counter';
function App() {
  return (
    <div>
<HomePage></HomePage>
{/* <Login/> */}
{/* <Counter/> */}
    </div>
  );
}

export default App;
