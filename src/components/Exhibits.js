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
    }
    this.recalculateEntryAndExit = this.recalculateEntryAndExit.bind(this);
  }

  componentDidMount() {
    this.recalculateEntryAndExit();
  }

  recalculateEntryAndExit() {
    console.log();
    const firstStickyPos = document.querySelectorAll('[data-sticky]')[0].getBoundingClientRect().top;
    const secondStickyPos = document.querySelectorAll('[data-sticky]')[1].getBoundingClientRect().top + document.documentElement.scrollTop;
    const thirdStickyPos = document.querySelectorAll('[data-sticky]')[2].getBoundingClientRect().top + document.documentElement.scrollTop;
    const headerHeight = document.querySelectorAll('[data-sticky]')[1].clientHeight;
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
      </div>
    )
  }
}

export default Exhibits
