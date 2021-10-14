import PropTypes from 'prop-types';

function Header({ children, filmCount }) {
  return (
    <h1>
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
