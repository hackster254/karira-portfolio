import React, { useState } from 'react';

import { styles } from '../styles/ChatStyle';

function Avatar({ style, onClick, props }) {
  // state for hover
  // console.log(`props styles is ${props.style}`);
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div
        style={{
          ...style,
        }}
      >
        <div
          className="transition-3"
          style={{ ...styles.avatarHello, ...{ opacity: hovered ? '1' : '0' } }}
        >
          Hey its Karira
        </div>

        <div
          className="transition-3"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onClick}
          role="presentation"
          style={{
            ...styles.chatWithMeButton,
            ...{ border: hovered ? '1px solid #66ff66' : '4px solid #ff4000' },
          }}
        />
      </div>
    </>
  );
}

export default Avatar;
