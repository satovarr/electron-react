import "./App.css";
import SimpleTabs from "./components/SimpleTab/index.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Table} from "./components/Table/index.js";

function App() {
  return (
    <Router>
      <div className="App">
        
            {//Switch between components by paths
            }
          <Switch>
            <Route exact 
            path="/"> <SimpleTabs></SimpleTabs>
              
            </Route>
            <Route 
                path="/Tab"> 
            </Route>
          </Switch>
          
        
      </div>
    </Router>
  );
}

export default App;

