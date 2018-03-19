import React from 'react'
import styles from "./components.module.css"

class ProjectList extends React.Component {
  render () {
    return (
      <div className={styles.col12}>
        <div className={styles.desktoponly}>
          <p className={styles.big}>
            New website on the way, be informed about Christians' works, exhibitions and projects
          </p>
          <form action="" method="post">
  					<input type="text" name="email" placeholder="your e-mail here"/>
  					<input type="submit" value="ok" className={styles.standard}/>
  				</form>
        </div>
      </div>
    )
  }
}

export default ProjectList
