import React from 'react';
import PropTypes from 'prop-types'
import styles from './Span.module.css';

const Span = (props) => {

  const { text, number } = props

  return (
    <span className={styles.text}>
      {text}: {number}
    </span>
  );
};

Span.defaultProps = {
  number: 4
};

Span.propTypes = {
  text: PropTypes.string.isRequired
};

export default Span;
