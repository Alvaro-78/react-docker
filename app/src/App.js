import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './views/login/loginView'
import Home from './views/home/HomeView'

function App() {
  return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
