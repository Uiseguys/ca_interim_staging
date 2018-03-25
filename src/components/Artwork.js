import React from 'react';
import styles from "./components.module.css";
import ReactSwipeEvents from 'react-swipe-events';

class Artwork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '1',
      title1: 'abstract VII, 2017',
      title2: 'acrylic on canvas, 80 x 65 cm',
    };
    this.changeImgAsc = this.changeImgAsc.bind(this);
    this.changeImgDesc = this.changeImgDesc.bind(this);
  }

  changeImgAsc() {
    return this.setState((prevState) => {
      let final;
      if (prevState.number === '1') {
        final = {
          number: '2',
          title1: 'abstract V, 2017',
          title2: 'acrylic on canvas, 80 x 65 cm',
        };
      }

      if (prevState.number === '2') {
        final = {
          number: '3',
          title1: 'cool water, 2017',
          title2: 'acrylic on canvas, 210 x 260 cm',
        };
      }

      if (prevState.number === '3') {
        final = {
          number: '1',
          title1: 'abstract VII, 2017',
          title2: 'acrylic on canvas, 80 x 65 cm',
        };
      }

      return final;
    });
  }

  changeImgDesc() {
    return this.setState((prevState) => {
      let final;
      if (prevState.number === '3') {
        final = {
          number: '2',
          title1: 'abstract V, 2017',
          title2: 'acrylic on canvas, 80 x 65 cm',
        };
      }

      if (prevState.number === '1') {
        final = {
          number: '3',
          title1: 'cool water, 2017',
          title2: 'acrylic on canvas, 210 x 260 cm',
        };
      }

      if (prevState.number === '2') {
        final = {
          number: '1',
          title1: 'abstract VII, 2017',
          title2: 'acrylic on canvas, 80 x 65 cm',
        };
      }

      return final;
    });
  }

  render () {
    return (
      <div className={styles.artwork}>
        <ReactSwipeEvents onSwipedLeft={this.changeImgAsc} onSwipedRight={this.changeImgDesc}>
          <img onClick={this.changeImgAsc} className={styles.img} src={`http://localhost:9000/images/art${this.state.number}.jpg`} />
        </ReactSwipeEvents>
        <div className={`${styles.row3} ${styles.small}`}>
          <div className={styles.col31}>{this.state.title1}<br />{this.state.title2}</div>
          <div className={styles.col32}>{`${this.state.number}/3`}</div>
        </div>
      </div>
    )
  }
}

export default Artwork
