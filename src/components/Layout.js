import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Navbar'
import StyledBackgroundSection from './StyledBackgroundSection'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Chief O'Neill | The Chicago Police Chief Who Saved Irish Music" />
    <StyledBackgroundSection className="bg-image"/>
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
