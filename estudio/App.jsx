import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const[vehiculos, setVehiculos]= useState([]);

  useEffect(() =>{
    //consumir la API desde el frontend
    fetch("http://localhost:8000/api/vehiculos")
    .then(res=>res.json())
    .then(data=> setVehiculos(data))
    .catch(err=> console.error("Error cargando autos", err));
  }, []);

  return (
    <div>
      <h1> Estado de Vehículos</h1>
      <div className="grilla-vehiculos">
        {vehiculos.map(v=> (
          <div key={v.ID} className="card">
            <img src={v.image} alt={'${v.brand} ${v.model}'} width="200" />
            <h2>{v.brand} {v.model} | {v.plate}</h2>
            <p>Año: {v.year}</p>
            <p>●: {v.status}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default App;
