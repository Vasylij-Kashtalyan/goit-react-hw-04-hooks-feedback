import PropTypes from 'prop-types';
import s from './Notification.module.css'

function Notiffication({message}) {
    return (
      <p className={s.notiffication}>{message}</p>  
    );
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notiffication;