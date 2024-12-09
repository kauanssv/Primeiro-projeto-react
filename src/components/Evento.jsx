import Button from "./evento/Button"
function Evento(){

    function meuEvento(){
        window.alert('Ativando primeiro evento')
    }

    function segundoEvento(){
        window.alert('Ativando segundo evento')
    }

        return(
            <div>
                <p>Clique para disparar um evento:</p>
                <Button event={meuEvento} text='Primeiro evento'/>
                <Button event={segundoEvento} text='Segundo evento'/>
            </div>
        )
}
export default Evento