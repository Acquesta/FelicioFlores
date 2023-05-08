import HoteBar from "./hoteBar";
import "../assets/login.css"

function Login() {
    return(
        <div>
            <HoteBar />
            <h1>Login</h1>
            <div className="card">
                <div className="inputs">
                    <h2>Fazer Login</h2>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <input type="password" name="senha" id="senha" placeholder="Senha" />
                    <input type="button" value="ENTRAR" id="btn" className="btn" />
                </div>
            </div>
        </div>
    )
}

export default Login