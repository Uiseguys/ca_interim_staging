import React from 'react';
import { Sticky } from '../components/sticky.js';
// import styles from '../components/sticky.module.css';

export default () => (
  <div>
    <header className={styles.title}>Sample Title</header>
    <Sticky className='sticky-one' exit="350">
      <h3>Testing #1</h3>
    </Sticky>
    <div className={styles.Entries}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue dui, commodo nec eros sed, consectetur euismod eros. Donec nibh elit, condimentum finibus interdum eget, laoreet sodales nisi. Donec posuere magna et pretium accumsan. Pellentesque ut arcu vel odio ullamcorper facilisis quis sed ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum gravida, sapien nec imperdiet maximus, lacus nulla porttitor magna, eu dictum ipsum urna tempus diam. Donec venenatis arcu eu metus tempus, sed porttitor erat facilisis. Suspendisse vel dictum nulla. Etiam lobortis ligula quis massa accumsan, sed consectetur metus posuere. Quisque vitae ex lorem.</p>
      <p>Quisque sagittis maximus nibh, non venenatis orci pulvinar tempus. Nullam laoreet lorem at orci ultrices pulvinar. Nam dictum ante ut ultricies volutpat. In venenatis mollis condimentum. Sed sagittis condimentum sollicitudin. Mauris vel ipsum non diam fermentum lacinia eu congue lacus. Aenean molestie ex at sem tempor, eu ullamcorper eros volutpat. Nunc a nulla sed orci tincidunt euismod a a arcu. Morbi at accumsan enim, et volutpat nisi. Nullam libero tortor, pretium sit amet tempor eu, vestibulum molestie libero. Proin ac ex ac augue porttitor posuere a a orci.</p>
    </div>

    <Sticky className='sticky-two' enter="350" exit="760">
      <h3>Testing #2</h3>
    </Sticky>
    <div className={styles.Entries}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue dui, commodo nec eros sed, consectetur euismod eros. Donec nibh elit, condimentum finibus interdum eget, laoreet sodales nisi. Donec posuere magna et pretium accumsan. Pellentesque ut arcu vel odio ullamcorper facilisis quis sed ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum gravida, sapien nec imperdiet maximus, lacus nulla porttitor magna, eu dictum ipsum urna tempus diam. Donec venenatis arcu eu metus tempus, sed porttitor erat facilisis. Suspendisse vel dictum nulla. Etiam lobortis ligula quis massa accumsan, sed consectetur metus posuere. Quisque vitae ex lorem.</p>
    <p>Quisque sagittis maximus nibh, non venenatis orci pulvinar tempus. Nullam laoreet lorem at orci ultrices pulvinar. Nam dictum ante ut ultricies volutpat. In venenatis mollis condimentum. Sed sagittis condimentum sollicitudin. Mauris vel ipsum non diam fermentum lacinia eu congue lacus. Aenean molestie ex at sem tempor, eu ullamcorper eros volutpat. Nunc a nulla sed orci tincidunt euismod a a arcu. Morbi at accumsan enim, et volutpat nisi. Nullam libero tortor, pretium sit amet tempor eu, vestibulum molestie libero. Proin ac ex ac augue porttitor posuere a a orci.</p>
    </div>
    <Sticky className='sticky-three' enter="760">
      <h3>Testing #3</h3>
    </Sticky>
    <div className={styles.Entries}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue dui, commodo nec eros sed, consectetur euismod eros. Donec nibh elit, condimentum finibus interdum eget, laoreet sodales nisi. Donec posuere magna et pretium accumsan. Pellentesque ut arcu vel odio ullamcorper facilisis quis sed ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum gravida, sapien nec imperdiet maximus, lacus nulla porttitor magna, eu dictum ipsum urna tempus diam. Donec venenatis arcu eu metus tempus, sed porttitor erat facilisis. Suspendisse vel dictum nulla. Etiam lobortis ligula quis massa accumsan, sed consectetur metus posuere. Quisque vitae ex lorem.</p>
    <p>Quisque sagittis maximus nibh, non venenatis orci pulvinar tempus. Nullam laoreet lorem at orci ultrices pulvinar. Nam dictum ante ut ultricies volutpat. In venenatis mollis condimentum. Sed sagittis condimentum sollicitudin. Mauris vel ipsum non diam fermentum lacinia eu congue lacus. Aenean molestie ex at sem tempor, eu ullamcorper eros volutpat. Nunc a nulla sed orci tincidunt euismod a a arcu. Morbi at accumsan enim, et volutpat nisi. Nullam libero tortor, pretium sit amet tempor eu, vestibulum molestie libero. Proin ac ex ac augue porttitor posuere a a orci.</p>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
);
