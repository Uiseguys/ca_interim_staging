import React from 'react'
import Gallery from './Gallery.js'
import styles from "./components.module.css"

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showGallery: false
    };
  }

  render () {
    return (
      <div className={styles.row2}>
        <div className={`${styles.col21} ${styles.big}`}>{this.props.date1}<br />{this.props.date2}</div>
        <div className={styles.col22}>
          <div className={`${styles.projTitle} ${styles.big}`} onClick={() => {
            setTimeout(()=>{
              this.props.recalculate();
            }, 700);
            return this.setState((prevState) => {
              return {showGallery: !prevState.showGallery}
            })
          }}>
            {this.props.title1}<br />
            {this.props.title2}<br />
            {this.props.title3}
          </div>
          {
            this.state.showGallery && this.props.hasPics ? <Gallery /> : null
          }
        </div>
      </div>
    )
  }
}

export default Project
