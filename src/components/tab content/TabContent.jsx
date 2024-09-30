import React from 'react'
import { EXAMPLES } from '../../data'

export default function TabContent({ children }) {
    let tabContent = <p>Please select a topic</p>

  if (children) {
    tabContent =    
    <div id="tab-content">
      <h3>{EXAMPLES[children].title}</h3>
      <p>{EXAMPLES[children].description}</p>
      <pre>
        <code>
          {EXAMPLES[children].code}
        </code> 
      </pre>
    </div>
  }     
  return (
    tabContent
  )
}