import React, { useState } from 'react';
import PropTypes from 'prop-types';

const styles = {
  button: {
    padding: 10,
    width: 120,
    cursor: 'pointer',
  }
};

const Sidebar = ({ items, onItemChange }) => {
  const [active, setActive] = useState(items[0].value);

  const onButtonClick = (val) => {
    setActive(val);
    if(onItemChange) {
      onItemChange(val);
    }
  };

  return (
    <aside>
      <ul>
        {
          items.map((item, i) => (
            <li key={i} style={{fontWeight: active === item.value ? 'bold' : 'normal'}}>
              <button style={styles.button} onClick={() => onButtonClick(item.value)} type="button">
                {item.text}
              </button>
            </li>
          ))
        }
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  onItemChange: PropTypes.func,
};

export default Sidebar;