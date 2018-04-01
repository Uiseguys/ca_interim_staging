import React from 'react'
import styles from "./components.module.css"

class Newsletter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subscribeEmail: '',
      formVisible: true,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    const elementsToToggle = document.querySelectorAll('[data-toggle]');
    [].forEach.call(elementsToToggle, (elem) => {
      elem.classList.toggle('src-components----components-module---mobilehidden---1hed_');
    });
  }

  onSubmit(e) {
    const clientEmail = 'contact@christianawe.com';
    e.preventDefault();
    fetch('https://loopback3-boilerplate.herokuapp.com/api/email/send', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: {
        to: clientEmail,
        template: 'newsletter_client.html',
        subject: 'Diese Emailadresse bitte in den Verteiler aufnehmen',
        data: {
          email: this.state.subscribeEmail
        }
      }
    })
    .then((res)=>{
      this.setState({subscribeEmail: '', formVisible: false });
    })
    .catch((err)=>{
      console.log('error', err);
    });
  }

  onChange(e) {
    return this.setState({ subscribeEmail:  e.target.value, formVisible: true });
  }

  render () {
    return (
      <div className={styles.col12}>
        <div className={`${styles.websiteformdiv}`}>
          <p className={styles.big}>
            <span className={styles.subscribeToggle}>
              <span onClick={this.toggleForm} className={styles.clickable}>New website</span><span className={styles.whitespace}> </span><span className={styles.linebreak}><br /></span>on the way
            </span>
            <span className={`${styles.subscribeText} ${styles.mobilehidden}`} data-toggle={true}>
              <span className={styles.comma}>, </span>be informed about Christians{"'"} works, exhibitions and projects
            </span>
          </p>
          <div className={`${styles.mobilehidden}`} data-toggle={true}>
            {
              this.state.formVisible ?
              <form action="https://loopback3-boilerplate.herokuapp.com/api/email/send" method="post" onSubmit={this.onSubmit}>
              <input type="text" name="email" placeholder="your e-mail address here" value={this.state.subscribeEmail} onChange={this.onChange} />
              <input type="submit" value="ok" className={styles.standard}/>
              </form> :
              <div className={styles.thankyou}>
              Thank you!
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Newsletter;
