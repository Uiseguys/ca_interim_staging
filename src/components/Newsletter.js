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
        <div className={styles.desktoponly}>
          <p className={styles.big}>
            {"New website on the way, be informed about Christians' works, exhibitions and projects"}
          </p>
          {
            this.state.formVisible ?
            <form action="https://loopback3-boilerplate.herokuapp.com/api/email/send" method="post" onSubmit={this.onSubmit}>
            <input type="text" name="email" placeholder="your e-mail here" value={this.state.subscribeEmail} onChange={this.onChange} />
            <input type="submit" value="ok" className={styles.standard}/>
            </form> :
            <div>
            Thank you!
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Newsletter;
