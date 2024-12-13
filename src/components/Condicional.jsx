import { useState } from "react"
function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }
    function limparEmail(e){
        setEmail = ''
    }


    return(
        <>
            <h3>Cadastre o seu e-mail:</h3>
            <form>
                <input type="email" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar</button>
                {userEmail && (
                    <div>
                          <p>O e-mail do usuário é: {userEmail}</p>
                          <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </>
    )
}
export default Condicional