import "./App.css";
import SimpleTabs from "./components/SimpleTab/index.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from "./components/Table/index.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
            {//Switch between components by paths
            }
          <Switch>
            <Route exact 
                path="/"> <SimpleTabs />
            </Route>
            <Route 
                path="/Tab"> <SimpleTabs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

/**
 * 
 * <div className="containerInput">
                <input value={busqueda} placeholder="Busqueda por nombre" />
                <button className="success-btn">

                </button>
              </div>

              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Telefono</th>
                      <th>Nombre del usuario</th>
                      <th>Correo</th>
                      <th>Sitio Web</th>
                      <th>Ciudad</th>
                      <th>Empresa</th>
                    </tr>
                  </thead>
                </table>

                <tbody>
                  {usuarios && usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                      <td>{usuario.id}</td>
                      <td>{usuario.name}</td>
                      <td>{usuario.phone}</td>
                      <td>{usuario.username}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.website}</td>
                      <td>{usuario.address.city}</td>
                      <td>{usuario.company.name}</td>
                    </tr>
                  ))}
                </tbody>
              </div>
 */
