import React from 'react'
import styles from "./components.module.css"

class ContactDetails extends React.Component {
  render () {
    return (
      <div className={`${styles.contact} ${styles.big}`}>
        <div className={`${styles.contactdetails} ${styles.firstdetail}`}>
          Atelier
          <span className={styles.whitespace}> </span>
          <span className={styles.linebreak}><br /></span>
          Christian Awe
    			<br />Siegfriedstr. 204a
    			<br />
          10365 Berlin,
          <span className={styles.whitespace}> </span>
          <span className={styles.linebreak}><br /></span>
          Germany
    		</div>
    		<div className={styles.contactdetails}>
        office
        <span className={styles.whitespace}> </span>
        <span className={styles.linebreak}><br /></span>
        +49 30 84 41 99 40
    			<br /><a href="mailto:info@christianawe.com">
    				info@<span className={styles.linebreak}><br /></span>christianawe.com
    			</a>
    		</div>
    		<div className={styles.contactdetails}>press inquiries:
    			<br /><a href="mailto:presse@christianawe.com">
    				presse@<span className={styles.linebreak}><br /></span>christianawe.com
    			</a>
    		</div>
    		<div className={`${styles.contactdetails} ${styles.alignleft}`}>Galleries:
    			<br />Ludorff (Düsseldorf)
    			<br />Ostendorf (Münster)
    			<br />Thomas Fuchs (Stuttgart)
    			<br />Tristan Lorenz (Frankfurt am Main)
    		</div>
      </div>
    )
  }
}

export default ContactDetails
