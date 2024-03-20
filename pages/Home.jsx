import * as React from "react";
import "../components/App.css";

function Home() {
  return (
    <div class="container">
      <div class="item-container">
        <p>Usuário</p>
        <form>
          <input type="text" class="input"></input>
        </form>
        <p>Senha</p>
        <form>
          <input type="password" class="input"></input>
        </form>
        <form>
        <input type="checkbox" name="Guardar minha Sessão."></input>
        </form>
      </div>
   <button id="input-button">Confirmar</button>
    </div>
  )
}

export default Home;