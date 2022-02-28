import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsuarios(response.data);
        setTablaUsuarios(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <div className="App">

      <div className="containerInput">
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
    </div>
  );
}

export default App;
