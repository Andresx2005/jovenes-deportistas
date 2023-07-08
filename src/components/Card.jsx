import './Card.css'

function Card({datos, deporteCond, deporteCond2, deporteCond3, sexoCond, sexoCond2, sexoCond3, edadCond, comunaCond,
              nombre, deporte, sexo, edad, comuna, direccion, telefono}) {


  return (
    <>
      {(datos.deporte == deporteCond || datos.deporte == deporteCond2 || datos.deporte == deporteCond3 || datos.deporte == "") &&
      (datos.sexo == sexoCond || datos.sexo == sexoCond2 ||datos.sexo == sexoCond3 || datos.sexo == "") &&
      (datos.edad == edadCond || datos.edad == "") && (datos.comuna == comunaCond || datos.comuna == "") ?
      <div>
        <div className='card-container'>
          <div className="card">
            <h2>{nombre}</h2>
            <br />
            <ul>
              <li><strong>Deportes:</strong> {deporte}</li>
              <li><strong>Sexo:</strong> {sexo}</li>
              <li><strong>Edad:</strong> {edad}</li>
              <li><strong>Comuna:</strong> {comuna}</li>
              <p></p>
              <li><strong>Dirección:</strong> {direccion}</li>
              <li><strong>Teléfono:</strong> {telefono}</li>
            </ul>
          </div>
        </div>
      </div>

      :

      null
      }
    </>
  )
}

export default Card
