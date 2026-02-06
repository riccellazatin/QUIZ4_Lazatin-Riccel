import React from 'react'
import '../bootstrap.min.css'
import Project from '../components/Project.jsx'

function Homescreen() {
  return (
    <>
    <div>
        <h1>testing screen</h1>
        <Project project={project} />
    </div>
    </>
  )
}

export default Homescreen;