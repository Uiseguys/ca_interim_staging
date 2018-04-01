import React from 'react';
import animateScrollTo from 'animated-scroll-to';
import CurrentlyWorking from './CurrentlyWorking.js';
import ContactDetails from './ContactDetails.js';
import Imprint from './Imprint.js';
import styles from './components.module.css';
import Sticky from './Sticky.js';

class Exhibits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial1: 0,
      initial2: 0,
      initial3: 0,
      arrowShown: document.documentElement.scrollTop > 1000 ? true : false
    }
    this.recalculateInitialPos = this.recalculateInitialPos.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    this.recalculateInitialPos();
    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 1000) {
        this.setState({arrowShown: true});
      } else {
        this.setState({arrowShown: false});
      }
    });
  }

  scrollToTop() {
    animateScrollTo(0, {
      speed: 40,
      element: window,
      cancelOnUserAction: true,
    })
  }

  recalculateInitialPos() {
    const firstStickyPos = document.querySelectorAll('[data-sticky] div')[0].getBoundingClientRect().top;
    const secondStickyPos = document.querySelectorAll('[data-sticky] div')[1].getBoundingClientRect().top + document.documentElement.scrollTop;
    const thirdStickyPos = document.querySelectorAll('[data-sticky] div')[2].getBoundingClientRect().top + document.documentElement.scrollTop;

    this.setState({
      initial1: firstStickyPos.toString(),
      initial2: secondStickyPos.toString(),
      initial3: thirdStickyPos.toString(),
    });
  }

  render () {
    return (
      <div style={{position:'relative'}}>
        <Sticky className='sticky-one' initial={this.state.initial1}>
          <div><span>currently working on</span></div>
        </Sticky>
        <CurrentlyWorking recalculate={this.recalculateInitialPos}/>
        <Sticky className='sticky-two' initial={this.state.initial2}>
          <div><span>get in touch</span></div>
        </Sticky>
        <ContactDetails />
        <Sticky className='sticky-three' initial={this.state.initial3}>
          <div><span>imprint</span></div>
        </Sticky>
        <Imprint />
        {
          this.state.arrowShown ?
          <div onClick={this.scrollToTop} className={`${styles.arrow} ${styles.big}`}>
          &#8593;
          </div> :
          null
        }
      </div>
    )
  }
}

export default Exhibits
