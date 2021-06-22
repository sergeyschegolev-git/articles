import PropTypes from 'prop-types';

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
