import PropTypes from 'prop-types';

export const TagPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export const TagsPropType = PropTypes.arrayOf(TagPropType);
