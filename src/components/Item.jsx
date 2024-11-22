import PropTypes from 'prop-types'

function Item({marca='Faltou marca', ano_lancamento=0}){
    return(
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

Item.prototype = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}
export default Item