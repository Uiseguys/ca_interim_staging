import React from 'react'
import CurrentlyWorking from './CurrentlyWorking.js'
import ContactDetails from './ContactDetails.js'
import Imprint from './Imprint.js'
import styles from './components.module.css'

class Exhibits extends React.Component {
  render () {
    return (
      <div>
        <div className={`${styles.overlap} ${styles.sectionHeader} ${styles.firstheader} ${styles.fixed}`}>currently working on</div>
        <CurrentlyWorking />
        <div className={styles.sectionHeader}>get in touch</div>
        <ContactDetails />
        <div className={styles.sectionHeader}>imprint</div>
        <Imprint />
      </div>
    )
  }
}

export default Exhibits
