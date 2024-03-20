import * as React from "react";
import "../components/App.css";

function Home() {
  const [isCheckboxActived, SetCheckBox] = React.useState(false);
  const verifyCheckbox = () => {
    SetCheckBox(!isCheckboxActived)
  }

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
            <label>
              <input type="checkbox" onChange={verifyCheckbox} checked={isCheckboxActived}/>
            Guardar minha Sessão.</label>
        </form>
      </div>
   <button id="input-button">Confirmar</button>
    </div>
  )
}

export default Home;