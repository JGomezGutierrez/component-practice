import React from 'react'

export const Children = ({ name, setName, addMessage }) => {

    const sendMessage = () => {
        addMessage("Este es el mensaje del HIJO");
     }

    const changeName = () => {
    setName("Nuevo Nombre Hijo")
    }

    return (
    <div>
    {name}
    <button onClick={sendMessage}>Enviar Mensaje </button>
    <button onClick={changeName}>Cambiar Nombre </button>
    </div>
  )
}

