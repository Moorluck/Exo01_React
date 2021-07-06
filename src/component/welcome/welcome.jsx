import PropTypes from 'prop-types'
import type from './welcome.module.css'

const Welcome = function(props) {
    const {name, age} = props;

    return(
        <div>
        <h1>Bienvenue <span className={type.name}>{name}</span> sur l'application React !</h1>
        <p>Vous avez <span className={type.age}>{age}</span> ans</p>
        </div>
    )
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

Welcome.defaultProps = {
    age: 18
}

export default Welcome;