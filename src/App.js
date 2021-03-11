
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import TeamDetails from './Component/TeamDetails/TeamDetails';

function App() {
  return (
    
      <Router>
     <Switch>
      
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="/teaminfo/:info">
       <TeamDetails></TeamDetails>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>

     </Switch>
      </Router>
      
    
  );
}

export default App;
