import React, { useState } from 'react';
import './Filtro.css'

function Filtro({datos, setDatos}) {

  const [seleccionadoDeporte, setSeleccionadoDeporte] = useState("no-seleccionado")
  const [seleccionadoSexo, setSeleccionadoSexo] = useState("no-seleccionado")
  const [seleccionadoEdad, setSeleccionadoEdad] = useState("no-seleccionado")
  const [seleccionadoComuna, setSeleccionadoComuna] = useState("no-seleccionado")

  const seleccion = (event) => {

    if(event.target.name == "deporte" && event.target.value != ""){
      setSeleccionadoDeporte("seleccionado")
    } else if(event.target.name == "deporte" && event.target.value == ""){
      setSeleccionadoDeporte("no-seleccionado")
    } else if(event.target.name == "sexo" && event.target.value != ""){
      setSeleccionadoSexo("seleccionado")
    } else if(event.target.name == "sexo" && event.target.value == ""){
      setSeleccionadoSexo("no-seleccionado")
    } else if(event.target.name == "edad" && event.target.value != ""){
      setSeleccionadoEdad("seleccionado")
    } else if(event.target.name == "edad" && event.target.value == ""){
      setSeleccionadoEdad("no-seleccionado")
    } else if(event.target.name == "comuna" && event.target.value != ""){
      setSeleccionadoComuna("seleccionado")
    } else if(event.target.name == "comuna" && event.target.value == ""){
      setSeleccionadoComuna("no-seleccionado")
    }

    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })

  }


  return (
    <nav>
      <form>
        <label>Deporte:</label><br/>
        <select id="deporte" name="deporte" onChange={seleccion} className={seleccionadoDeporte}>
          <option value="">Seleccionar</option>
          <option value="artes-marciales">Artes marciales</option>
          <option value="ajedrez">Ajedrez competitivo</option>
          <option value="boxeo">Boxeo</option>
          <option value="buceo">Buceo deportivo</option>
          <option value="tenis">Tenis</option>
          <option value="patin">Patín</option>
          <option value="futbol">Fútbol</option>
          <option value="futsal">Fútsal</option>
        {/*Agregar más deportes en caso de que sea necesario*/}
        </select> <br/> <br/>

        <label>Sexo:</label><br/>
        <select id="sexo" name="sexo" onChange={seleccion} className={seleccionadoSexo}>
          <option value="">Seleccionar</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="mixto">Mixto</option>
        </select> <br/> <br/>

        <label>Edad:</label> <br/>
        <select id="edad" name="edad" onChange={seleccion} className={seleccionadoEdad}>
          <option value="">Seleccionar</option>
          <option value="8-12">8-12 años</option>
          <option value="13-17">13-17 años</option>
          <option value="8-17">8-17 años</option>
        </select> <br/> <br/>
        
        <label>Comuna:</label> <br/>
        <select name="comuna" id="comuna" onChange={seleccion} className={seleccionadoComuna}>
          <option value="">Seleccionar</option>
          <option value="comuna-1">Comuna 1</option>
          <option value="comuna-2">Comuna 2</option>
          <option value="comuna-3">Comuna 3</option>
          <option value="comuna-4">Comuna 4</option>
          <option value="comuna-5">Comuna 5</option>
          <option value="comuna-6">Comuna 6</option>
          <option value="comuna-7">Comuna 7</option>
          <option value="comuna-8">Comuna 8</option>
          <option value="comuna-9">Comuna 9</option>
          <option value="comuna-10">Comuna 10</option>
          <option value="comuna-11">Comuna 11</option>
          <option value="comuna-12">Comuna 12</option>
          <option value="comuna-13">Comuna 13</option>
          <option value="comuna-14">Comuna 14</option>
          <option value="comuna-15">Comuna 15</option>
        </select>
      </form>
    </nav>
  );
};

export default Filtro