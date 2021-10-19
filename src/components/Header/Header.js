import PropTypes from 'prop-types';

import styles from './Header.module.css';

function Header({ children, filmCount }) {
  return (
    <h1 className={styles.title}>
      {children}, {filmCount} films
    </h1>
  );
}

Header.defaultProps = {
  children: 'No title',
};

Header.propTypes = {
  filmCount: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default Header;
