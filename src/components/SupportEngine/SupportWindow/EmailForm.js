import React, { useState } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { styles } from '../../../styles/ChatStyle';

import Avatar from '../../Avatar';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    console.log('sending email', email);
  }
  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{ height: '100%', opacity: '1' },
      }}
    >
      <div style={{ height: '0px' }}>
        <div style={{ ...styles.stripe }} />
      </div>
      <div
        className="transition-5"
        style={{
          ...styles.loadingDiv,
          ...{ zIndex: loading ? '10' : '-1', opacity: loading ? '0.33' : '0' },
        }}
      />
      <LoadingOutlined
        className="transition-5"
        style={{
          ...styles.loadingIcon,
          ...{
            zIndex: loading ? '10' : '-1',
            opacity: loading ? '1' : '0',
            fontSize: '82px',
            alignItems: 'center',
            position: 'relative',
            // top: 'calc(50%- 41px)',
            // left: 'calc(50%- 41px)',
          },
        }}
      />

      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Avatar
          style={{
            position: 'relative',
            left: 'calc(50% - 44px)',
            top: '-1px',
          }}
        />

        <div style={{ ...styles.topText, ...{ top: '1px' } }}>
          Welcome, <br />
          Chat me 👇
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ position: 'relative', width: '100%', top: '19.75%' }}
        >
          <input
            style={styles.emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default EmailForm;
