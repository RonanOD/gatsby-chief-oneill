import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <Layout>
    <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="Contact Page" />
    </Helmet>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              Contact Page
              </h2>
              <div className="content">
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage