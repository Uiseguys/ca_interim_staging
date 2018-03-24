import React from 'react'
import Artwork from './Artwork.js'
import styles from "./components.module.css"

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showGallery: false
    };
  }

  render () {
    return (
      <div className={styles.gallery}>
        <div>
          <div className={styles.firstpar}>
            Exhibition with works of Christian Awe<br />
            and the Georgian artist Levan<br />
            Songulashvilli
          </div>
          <div>
            68projects, Fasanenstr. 68, 10719 Berlin<br />
            Opening: 16.03., 6 - 9 p.m.
          </div>
          <Artwork />
        </div>
      </div>
    )
  }
}

export default Gallery
