import React from 'react';
import PropTypes from 'prop-types';

function Rating({ total, value }) {
  return (
    <>
      {Array(total)
        .fill('')
        .map((_, i) => (
          <i key={i} className={i < value ? 'fas fa-star' : 'far fa-star'}></i>
        ))}
    </>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Rating;
