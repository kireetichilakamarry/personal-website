import React from 'react'

import { personalProjects, courseWorkProjects } from '../contents/Projects'
import ProjectInfo from '../components/Projectinfo'

const Projects = () => {
  return (
    <div className='min-h-screen py-40  w-full'>
        <ProjectInfo
          projectType="Personal Projects"
          projects={personalProjects}
        />
        <br />
        <ProjectInfo
          projectType="Coursework Projects"
          projects={courseWorkProjects}
        />
    </div>
  )
}

export default Projects
