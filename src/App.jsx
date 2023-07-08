import './App.css';
import Header from './components/Header';
import Filtro from './components/Filtro';
import Footer from './components/Footer';
import Card from './components/Card';
import Cardscontainer from './components/Cardscontainer';
import Navbar from './components/Navbar';
{/*import Carrousel from './components/Carrousel';*/}
{/*import {slides} from "./data/dataCarrousel.json"*/}
import React, { useState } from 'react';
import fotoIndex from './assets/FotoIndex.jpg';


function App () {
  
  const [datos, setDatos] = useState({
    deporte: "",
    sexo: "",
    edad: "",
    comuna: ""
  })


  return (
    <>
      <Header />
      <Navbar/>
      {/*<Carrousel data={slides} />  */}
      <img className="fotoIndex" src={fotoIndex} alt="Jóvenes deportistas" />

      <Filtro datos={datos} setDatos={setDatos} />                                                                                                                                                                                                                                                                                               
      <Cardscontainer>

      {/*Agregar "sexoCond2 y sexoCond3 para los que son mixtos. Hacer lo mismo con deporteCond para los clubs que tienen mas de un deporte. Agregar maximo hasta deporteCond3*/}
      <Card
        datos={datos} deporteCond="tenis" sexoCond="mixto" sexoCond2="femenino" sexoCond3="masculino" edadCond="13-17" comunaCond="comuna-13"
        nombre="Club Atlético Comercio"
        deporte="Tenis"
        sexo="Mixto"
        edad="13-17 años"
        comuna="Comuna 13"
        direccion="Av. Libertador 7199"
        telefono="4701-5620"
      />
      <Card
        datos={datos} deporteCond="artes-marciales" sexoCond="mixto" sexoCond2="femenino" sexoCond3="masculino" edadCond="8-12" comunaCond="comuna-12"
        nombre="Asociación Vecinal Lomas de Saavedra"
        deporte="Artes marciales"
        sexo="Mixto"
        edad="8-12 años"
        comuna="Comuna 12"
        direccion="Pico 3540"
        telefono="4541-0777"
      />
      <Card
        datos={datos} deporteCond="boxeo" sexoCond="mixto" sexoCond2="femenino" sexoCond3="masculino" edadCond="8-17" comunaCond="comuna-5"
        nombre="Almagro Boxing Club"
        deporte="Boxeo"
        sexo="Mixto"
        edad="8-17 años"
        comuna="Comuna 5"
        direccion="Diaz Velez 4422"
        telefono="4982-6529 / 4865-1471"
      />
      <Card
        datos={datos} deporteCond="buceo" sexoCond="mixto" sexoCond2="femenino" sexoCond3="masculino" edadCond="13-17" comunaCond="comuna-5"
        nombre="Agrupación Subatlántica de Expediciones Submarinas Jules Rossi"
        deporte="Buceo deportivo"
        sexo="Mixto"
        edad="13-17 años"
        comuna="Comuna 5"
        direccion="Quito 3657"
        telefono="4931-6746"
      />
      <Card
        datos={datos} deporteCond="ajedrez" sexoCond="mixto" sexoCond2="femenino" sexoCond3="masculino" edadCond="13-17" comunaCond="comuna-1"
        nombre="Club de Ajedrez Jaque Mate"
        deporte="Ajedrez competitivo"
        sexo="Mixto"
        edad="13-17 años"
        comuna="Comuna 1"
        direccion="Sgo. Del Estero 952"
        telefono="1305-5206"
      />
      <Card
        datos={datos} deporteCond="patin" deporteCond2={"futsal"} sexoCond="femenino" edadCond="8-12" comunaCond="comuna-7"
        nombre="Pintita"
        deporte="Patín artístico y futsal"
        sexo="Femenino"
        edad="8-12 años"
        comuna="Comuna 7"
        direccion="Mariano Acosta 2005"
        telefono="4611-1181"
      />
      <Card
        datos={datos} deporteCond="futbol" sexoCond="masculino" edadCond="8-17" comunaCond="comuna-1"
        nombre="Asociación Civil Olímpica de Fútbol"
        deporte="Fútbol"
        sexo="Masculino"
        edad="8-17 años"
        comuna="Comuna 1"
        direccion="Tacuari 773"
        telefono="4307-1623"
      />
      <Card
        datos={datos} deporteCond="futbol" sexoCond="masculino" edadCond="8-12" comunaCond="comuna-4"
        nombre="Cacho Laborde"
        deporte="Fútbol"
        sexo="Masculino"
        edad="8-13 años"
        comuna="Comuna 4"
        direccion="Luna 1547"
        telefono="4307-4123"
      />
      <Card
        datos={datos} deporteCond="artes-marciales" sexoCond="masculino" edadCond="8-17" comunaCond="comuna-9"
        nombre="Club Social, Cultural y Deportivo Larrazabal"
        deporte="Artes marciales"
        sexo="Masculino"
        edad="8-17 años"
        comuna="Comuna 9"
        direccion="Larrazabal 829"
        telefono="4642-7089"
      />
      <Card
        datos={datos} deporteCond="ajedrez" sexoCond="mixto" sexoCond2="femenino" sexoCond3="masculino" edadCond="8-12" comunaCond="comuna-11"
        nombre="Club de Ajedrez de Villa del Parque"
        deporte="Ajedrez competitivo"
        sexo="Mixto"
        edad="8-13 años"
        comuna="Comuna 11"
        direccion="Santo Tomé 3823"
        telefono="1243-2314"
      />
      </Cardscontainer>
      <Footer/>
    </>
  );
};

export default App;

/* if((deporte == datos.deporte || datos.deporte == "") && (genero == datos.genero || datos.genero == "") etc.)*/