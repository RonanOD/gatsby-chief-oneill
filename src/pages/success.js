import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import pic11 from '../img/0oneillpic1909.jpg'

const Success = (props) => (
    <Layout>
        <Helmet>
            <title>Success Page</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Thank You
                  </h2>
                  <div className="content">
                      <figure className="image"><
                        img src={pic11} alt="The Chief Thanks You!" />
                      </figure>
                      <p>Thank you for contacting us!</p>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
)

export default Success