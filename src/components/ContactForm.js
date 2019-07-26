import React from 'react'

const ContactForm = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form name="contact" method="post" action="/success" 
                      data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="bot-field" />

                  <div className="field first">
                    <label className="label" htmlFor="name">Name</label>
                    <div className="control">
                      <input className="input" type="text" name="name" id="name" required/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="email">Email</label>
                    <div className="control">
                      <input className="input" type="text" name="email" id="email" required/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="message">Message</label>
                      <div className="control">
                        <textarea className="textarea" name="message" id="message" rows="6" required></textarea>
                      </div>
                  </div>
                  <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                      <input type="submit" value="Send Message" className="button is-primary" />
                    </div>
                  </div>
                </form>
            </section>
        </div>
    </section>
)

export default ContactForm
