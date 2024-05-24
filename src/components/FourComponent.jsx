import React from 'react'

export  const FourComponent = () => {
 
  const handleClicked = (e) =>{
    alert("Has hecho click al botón");
  }

  const handleDoubleClicked = (e) =>{
    alert("Has hecho doble click al botón");
  }

  //Funciones para el Mouse 
  const handleMouseEnter = (e) =>{
    console.log("Has entrado a la caja con el mouse")
  }

  const handleMouseLeave = (e) =>{
    console.log("Has salido de mi caja")
  }

  //OnMouse y Onleave con una sola funcion
  const handleMouse= (e, action) => {
    console.log("Has "+action+" la caja ")
  }

  // onMouseEnter y onMouseLeave con una sola función con  Console Log
  const handleMouseCl = (e, action) => {
    alert(`Has ${action}  la caja`);
  }

  //onFocus
  const insideInput = (e) => {
   console.log("Estas dentro del input, escribe tu nombre !!")
  }

  //onBlur
  const outsideInput= (e) => {
    console.log("Estas fuera del input, Adios !!")
   }

  return (
    <div>
      <h2>Eventos en React</h2>
      {/*Evento Click*/}
      <div>
        <button onClick={() => {
            console.log("Hola, soy un evento Click!!");
        } }>Haz click</button>
       </div> 

       <div>
        <button onClick={ handleClicked }>Aqui tambien haz Click!!</button>
       </div>

      {/*Evento Doble Click*/}
      <div>
        <button onDoubleClick = {handleDoubleClicked}>Haz doble Click!!</button>
      </div>
      {/*Evento Mouse Enter y Mouse Leave*/}
      <hr />
      <div id="box">
        <div id="box1"
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <p>Pasa el mouse por encima!!</p>
        </div>
        <div id="box2"
          onMouseEnter={ e => handleMouse(e, "entrando a") }
          onMouseLeave={ e => handleMouse(e, "salido de")}
        >
          <p>Pasa el mouse por encima!!</p>
        </div>
        <div id="box3"
          onMouseEnter={ e => handleMouseCl(e, "entrando a") }
          onMouseLeave={ e => handleMouseCl(e, "salido de")}
        >
          <p>Pasa el mouse por encima!!</p>
        </div>
      </div>
      
      {/*Evento Focus y Blur*/}

      <div className='mt-5'>
        <input type="text" 
        onFocus={insideInput}
        onBlur={outsideInput}
        placeholder="Escribe el nombre" id="" />
      </div>
    </div>
  )
}


