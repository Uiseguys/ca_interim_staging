import React from 'react'
import ProjectList from './ProjectList.js'
import Newsletter from './Newsletter.js'
import styles from './components.module.css'

class CurrentlyWorking extends React.Component {
  render () {
    return (
      <div className={styles.row1}>
        <ProjectList recalculate={this.props.recalculate}/>
        <Newsletter />
      </div>
    )
  }
}

export default CurrentlyWorking
