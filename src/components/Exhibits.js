import React from 'react';
import CurrentlyWorking from './CurrentlyWorking.js';
import ContactDetails from './ContactDetails.js';
import Imprint from './Imprint.js';
import styles from './components.module.css';
import { Sticky } from './Sticky.js';

// className={`${styles.overlap} ${styles.sectionHeader} ${styles.firstheader} ${styles.fixed}`}
//  className={styles.sectionHeader}


class Exhibits extends React.Component {
  render () {
    return (
      <div>
        <Sticky className='sticky-one' exit="1132">
          <div>currently working on</div>
        </Sticky>
        <CurrentlyWorking />
        <Sticky className='sticky-two' enter="1132" exit="2169">
          <div>get in touch</div>
        </Sticky>
        <ContactDetails />
        <Sticky className='sticky-three' enter="2169">
          <div>imprint</div>
        </Sticky>
        <Imprint />
      </div>
    )
  }
}

export default Exhibits
