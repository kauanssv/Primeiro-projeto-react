import { useState } from "react"
function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${senha}`)
        window.alert('Cadastrou o usuario')
    }

    const[name, setName] = useState()
    const[senha, setSenha] = useState()

    return(
        <div>
            <h2>Meu Cadastro:</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text" 
                    id="name" 
                    placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha: </label>
                    <input 
                    type="text" 
                    id="senha" 
                    placeholder="Digite sua senha"
                    onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value='Cadastrar'/>
                </div> 
            </form>
        </div>
    )
}
export default Form