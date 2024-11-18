import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactInfo: {
    paddingTop: '20px', // Add some padding from the top
    textAlign: 'center', // Center the text
  },
  email: {
    color: '#0066cc', // Email color
    fontSize: '1.2em',
  },
  phone: {
    fontSize: '1.2em',
  }
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div style={styles.mainContainer}>
        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
        {/* New Contact Info Section */}
        <div style={styles.contactInfo}>
          <div style={styles.email}>Email: manishagrawal705@gmail.com</div>
          <div style={styles.phone}>Phone: +91-8058008998</div>
        </div>

        <Social />
      </div>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
