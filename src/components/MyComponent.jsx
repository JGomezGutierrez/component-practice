import React from 'react'

export const MyComponent = () => {
  const name = " Inés ";
  const repository = "https://github.com/inesmariao/component-practice.git/"; 
 
  const student = {
    name: "Juliet",
    LastName: "Gomez",
    mobile: "3145494820",
    LinkedinProfile: "https:"
  }

  console.log(student);
 
  return (
    <div>
        <hr/>
        <p>Este es mi primer componente</p>
        <h2>Temas de React</h2>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados - Hook</li>
            <li>Comunicacion</li>
        </ul>
        <hr />
        <h2>Datos del Docente</h2>
        <p>Nombre:{ name }</p>
        <p>Repositorio:{ repository } </p>
        <hr/>
        <h2>Datos del estudiante</h2>
        <p>Nombre:   { JSON.stringify ( student )}</p> 
        <p>Nombre:   { student.name } </p>
        <p>Apellido: { student.LastName } </p>
        <p>Celular:  { student.mobile } </p>
        <p>Perfil de LinkedIn: { student.LinkedinProfile } </p>
    </div>
  )
}

export default MyComponent

