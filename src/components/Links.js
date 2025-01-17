import React from 'react'
import user from '../data/user'

const Links = (prop) => {
  return (
    <div id= 'links'>
      <h3>Links</h3>
      <a href='#github'>{user.links.github}</a>
      <a href='#linkedIn'>{user.links.linkedin}</a>
      
    </div>
  )
}

export default Links
