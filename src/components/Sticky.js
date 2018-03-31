import React from 'react';
import styles from './components.module.css';

export class Sticky extends React.Component {
  componentDidMount() {
    // const setInitialHeights = (elements) => {
    //   [].forEach.call(elements, (sticky) => {
    //     sticky.setAttribute('data-sticky-initial', sticky.getBoundingClientRect().top);
    //   });
    // };

    const stickies = document.querySelectorAll('[data-sticky]');
    // setInitialHeights(stickies);

    document.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      const bottom = document.documentElement.scrollHeight || document.body.scrollHeight;

      [].forEach.call(stickies, (sticky, i, arr) => {
        const stickyInitial = parseInt(sticky.getAttribute('data-sticky-initial'), 10);
        const stickyEnter = parseInt(sticky.getAttribute('data-sticky-enter'), 10) || stickyInitial;
        const stickyExit = parseInt(sticky.getAttribute('data-sticky-exit'), 10) || bottom;

        if (top >= stickyEnter && top <= stickyExit) {
          if (i > 0) {
            arr[i-1].classList.add('src-components----components-module---absolute---2Sk1q');
            arr[i-1].querySelector('div').style.top = `${stickyInitial}px`;
          }
          sticky.classList.add('src-components----components-module---sticky---2kzpb');
        } else {
          let nextStickyPos;
          if (i === 0) {
            nextStickyPos = arr[i + 1].querySelector('div').getBoundingClientRect().top;
          }
          if (i !== 0 || (i === 0 && document.documentElement.scrollTop > (nextStickyPos - 30))) {
            sticky.classList.remove('src-components----components-module---sticky---2kzpb');
          }
          if (document.documentElement.scrollTop < (stickyInitial - 30) && i === 1) {
            sticky.querySelector('div').style.top = `${stickyInitial}px`;
          }
        }
      });
    });
  }

  render() {
    const { className, enter, exit, initial, children } = this.props;

    return (<div
      className={`${styles.StickyComp} ${styles[className]}`}
      data-sticky
      data-sticky-enter={enter}
      data-sticky-exit={exit}
      data-sticky-initial={initial}
    >
      {children}
    </div>);
  }
}

// Sticky.propTypes = {
//   className: React.PropTypes.string,
//   enter: React.PropTypes.string,
//   exit: React.PropTypes.string,
//   children: React.PropTypes.node,
// };
