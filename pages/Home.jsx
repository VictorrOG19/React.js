import * as React from "react";
import "./components/App.css";

function Home() {

  return (
    <div class="container">
      <div class="item-container">
        <p>Coloque a Senha para Continuar!</p>
        <form>
          <input type="password" id="input-password"></input>
        </form>
      </div>
   <button id="input-button" onClick={verify}>Confirmar</button>
    </div>
  )
}

export default Home;