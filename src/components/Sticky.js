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
        const nextStickyInitial = arr[i+1] ? parseInt(arr[i+1].getAttribute('data-sticky-initial'), 10) : null;
        const stickyEnter = parseInt(sticky.getAttribute('data-sticky-enter'), 10) || stickyInitial;
        const stickyExit = parseInt(sticky.getAttribute('data-sticky-exit'), 10) || bottom;

        if (stickyInitial <= document.documentElement.scrollTop + 60) {
          sticky.classList.add('src-components----components-module---sticky---2kzpb');
          if (arr[i+1] && sticky.querySelector('div').getBoundingClientRect().top + document.documentElement.scrollTop >= nextStickyInitial-30) {
            sticky.classList.add('src-components----components-module---absolute---2Sk1q');
            sticky.querySelector('div').style.top = `${nextStickyInitial}px`;
          }
        } else {
          sticky.classList.remove('src-components----components-module---sticky---2kzpb');
          if (arr[i-1] && document.documentElement.scrollTop <= stickyInitial) {
            arr[i-1].classList.remove('src-components----components-module---absolute---2Sk1q');
            arr[i-1].querySelector('div').style.top = '';
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
