import React from 'react'
import Landing from './Landing.js'
import Exhibits from './Exhibits.js'
import styles from './components.module.css'

class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isIntro: true
    }
  }

  render () {
    return (
      <div>
        {
          this.state.isIntro ?
          <div>
            <header className={`${styles.landingHeader} ${styles.intro}`}>Christian Awe</header>
            <Landing onClick={() => this.setState({isIntro: false})}/>
          </div> :
          <div>
            <header className={`${styles.landingHeader}`}>Christian Awe</header>
            <Exhibits />
          </div>
        }
      </div>
    )
  }
}

export default MyComponent
