import React from 'react';
import PropTypes from "prop-types";

const styles = {
  card: {
    padding: 15,
    background: 'white',
    /** ie fallback */
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    /** ie fallback */
    borderRadius: 3,
  },
  title: {
    marginBottom: '12px',
    fontSize: '2.5em',
  },
  answer: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    display: 'inline-block',
    fontSize: '1.3em',
    lineHeight: 1.4,
  }
};

const Card = ({ title, answer, className }) => (
  <section className={className} style={styles.card}>
    <h1 style={styles.title} dangerouslySetInnerHTML={{__html: title}} />
    <div style={styles.answer} dangerouslySetInnerHTML={{__html: answer}} />
  </section>
);

Card.propTypes = {
  title: PropTypes.string,
  answer: PropTypes.string,
  className: PropTypes.string,
};

export default Card;