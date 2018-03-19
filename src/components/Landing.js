import React from 'react'
import styles from "./components.module.css"

class Landing extends React.Component {
  render () {
    const { onClick } = this.props
    return (
      <div className={styles.landing} onClick={onClick}></div>
    )
  }
}

export default Landing
