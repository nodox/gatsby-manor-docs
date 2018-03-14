import React from 'react'
import jsonp from 'jsonp'
import { validate } from 'email-validator'

import styles from '../styles/_subscribe_form.module.css'

// Mailchimp endpoint
// From: https://us17.admin.mailchimp.com/lists/integration/embeddedcode?id=XXXXXX
// Where `XXXXXX` is the MC list ID
// Note: we change `/post` to `/post-json`
const MAILCHIMP_URL = `https://gatsbymanor.us17.list-manage.com/subscribe/post-json?u=6d5879814f1b3ecd3667f0c47&amp;id=a66cece897`

class SubscribeForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ``,
    }
  }

  // Update state each time user edits their email address
  _handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  // Using jsonp, post to MC server & handle its response
  _postEmailToMailchimp = url => {
    // jsonp lib takes an `endpoint`, {options}, & callback
    jsonp(url, { param: `c` }, (err, data) => {
      // network failures, timeouts, etc
      if (err) {
        this.setState({
          status: `error`,
          msg: err,
        })

        // Mailchimp errors & failures
      } else if (data.result !== `success`) {
        this.setState({
          status: `error`,
          msg: data.msg,
        })

        // Posted email successfully to Mailchimp
      } else {
        this.setState({
          status: `success`,
          msg: data.msg,
        })
      }
    })
  }

  // On form submit, validate email
  // then jsonp to Mailchimp, and update state
  _handleFormSubmit = e => {
    e.preventDefault()
    e.stopPropagation()

    // If email is not valid, break early
    if (!validate(this.state.email)) {
      this.setState({
        status: `error`,
        msg: `"${this.state.email}" is not a valid email address`,
      })
      return
    }

    // Construct the url for our jsonp request
    // Query params must be in CAPS
    // Capture pathname for better email targeting
    const url = `${MAILCHIMP_URL}
      &EMAIL=${encodeURIComponent(this.state.email)}
      &PATHNAME=${window.location.pathname}
    `

    this.setState(
      {
        msg: null,
        status: `sending`,
      },
      // jsonp request as setState callback
      this._postEmailToMailchimp(url)
    )
  }

  render() {
    return (
      <div className={styles['subscribe']}>
        {this.state.status === `success` ? (
          <div className="">Thank you! We'll email you next announcements.</div>
        ) : (
          <div className="">
            <p>Subscribe to get updates on themes, docs, and announcements!</p>
            <form method="post" noValidate>
              <div>
                <input
                  type="email"
                  name="email"
                  className={styles['subscribe__field--email']}
                  placeholder="you@email.com"
                  onChange={this._handleEmailChange}
                />
                <button
                  type="submit"
                  className={styles['subscribe__button']}
                  onClick={this._handleFormSubmit}
                >
                  Subscribe
                </button>
                {this.state.status === `error` && (
                  <div
                    className={styles['subscribe--state-error']}
                    dangerouslySetInnerHTML={{ __html: this.state.msg }}
                  />
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default SubscribeForm
