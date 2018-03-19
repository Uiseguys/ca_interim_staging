import React from 'react'
import styles from "./components.module.css"

class Artwork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '1',
      title1: 'abstract VII, 2017',
      title2: 'acrylic on canvas, 80 x 65 cm',
    };
    this.changeImg = this.changeImg.bind(this);
  }

  changeImg() {
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

  render () {
    return (
      <div className={styles.artwork}>
        <img onClick={this.changeImg} className={styles.img} src={`http://localhost:9000/images/art${this.state.number}.jpg`} />
        <div className={`${styles.row3} ${styles.small}`}>
          <div className={styles.col31}>{this.state.title1}<br />{this.state.title2}</div>
          <div className={styles.col32}>{`${this.state.number}/3`}</div>
        </div>
      </div>
    )
  }
}

export default Artwork
