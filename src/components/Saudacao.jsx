function Saudacao({nome}){
    
    function gerarSaudacao(algumNome){
        return `Ola, ${algumNome}, tude bem?`
    }
    
    return(
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}
export default Saudacao