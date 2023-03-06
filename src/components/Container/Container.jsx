import PropTypes from 'prop-types';
import style from './Container.module.css';

export default function Container ({ children }) {
    return <div className={style.container}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};