import React from 'react';
import { Sticky } from '../components/sticky.js';
import styles from '../components/sticky.module.css';

export default () => (
  <div>
    <Sticky className='sticky-one' exit="450">
      <h3>Testing #1</h3>
    </Sticky>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Sticky className='sticky-two' enter="451" exit="800">
      <h3>Testing #2</h3>
    </Sticky>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Sticky className='sticky-three' enter="801">
      <h3>Testing #3</h3>
    </Sticky>
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
