import React from 'react';
import CurrentlyWorking from './CurrentlyWorking.js';
import ContactDetails from './ContactDetails.js';
import Imprint from './Imprint.js';
import styles from './components.module.css';
import { Sticky } from './Sticky.js';

class Exhibits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exit1entry2: 0,
      exit2entry3: 0,
      arrowShown: document.documentElement.scrollTop > 1000 ? true : false
    }
    this.recalculateEntryAndExit = this.recalculateEntryAndExit.bind(this);
  }

  componentDidMount() {
    this.recalculateEntryAndExit();
    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 1000) {
        this.setState({arrowShown: true});
      } else {
        this.setState({arrowShown: false});
      }
    });
  }

  recalculateEntryAndExit() {
    const firstStickyPos = document.querySelectorAll('[data-sticky] div')[0].getBoundingClientRect().top;
    const secondStickyPos = document.querySelectorAll('[data-sticky] div')[1].getBoundingClientRect().top + document.documentElement.scrollTop;
    const thirdStickyPos = document.querySelectorAll('[data-sticky] div')[2].getBoundingClientRect().top + document.documentElement.scrollTop;
    const headerHeight = document.querySelectorAll('[data-sticky] div')[1].clientHeight;
    this.setState({exit1entry2: (secondStickyPos - firstStickyPos).toString()});
    this.setState({exit2entry3: (thirdStickyPos - firstStickyPos - headerHeight).toString()});
  }

  render () {
    return (
      <div>
        <Sticky className='sticky-one' exit={this.state.exit1entry2}>
          <div>currently working on</div>
        </Sticky>
        <CurrentlyWorking recalculate={this.recalculateEntryAndExit}/>
        <Sticky className='sticky-two' enter={this.state.exit1entry2} exit={this.state.exit2entry3}>
          <div>get in touch</div>
        </Sticky>
        <ContactDetails />
        <Sticky className='sticky-three' enter={this.state.exit2entry3}>
          <div>imprint</div>
        </Sticky>
        <Imprint />
        {
          this.state.arrowShown ?
          <div className={`${styles.arrow} ${styles.big}`}>
          &#8593;
          </div> :
          null
        }
      </div>
    )
  }
}

export default Exhibits
