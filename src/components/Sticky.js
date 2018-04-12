import React from 'react';
import styles from './components.module.css';

class Sticky extends React.Component {
  componentDidMount() {

    const stickies = document.querySelectorAll('[data-sticky]');

    document.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop;

      [].forEach.call(stickies, (sticky, i, arr) => {
        const stickyInitial = parseInt(sticky.getAttribute('data-sticky-initial'), 10);
        const nextStickyInitial = arr[i+1] ? parseInt(arr[i+1].getAttribute('data-sticky-initial'), 10) : null;

        if (stickyInitial <= top + 60) {
          sticky.classList.add(styles.sticky);
          if (arr[i+1] && sticky.querySelector('div').getBoundingClientRect().top + top >= nextStickyInitial-30) {
            sticky.classList.add(styles.absolute);
            sticky.querySelector('div').style.top = `${nextStickyInitial}px`;
          }
        } else {
          sticky.classList.remove(styles.sticky);
          if (arr[i-1] && top <= stickyInitial) {
            arr[i-1].classList.remove(styles.absolute);
            arr[i-1].querySelector('div').style.top = '';
          }
        }
      });
    });
  }

  render() {
    const { className, initial, children } = this.props;

    return (<div
      className={`${styles.StickyComp} ${styles[className]}`}
      data-sticky
      data-sticky-initial={initial}
    >
      {children}
    </div>);
  }
}

export default Sticky
