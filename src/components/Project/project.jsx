import React from 'react'
import './Project.css'
import { projects } from '../../data'
import Card from './Card/Card'

const Project = () => {
    return (
        <section id='projects'>
            <div className='section__wrapper projects__container'>
                <div className='section__header center'>
                    <h1 className='primary__title'>Projects</h1>
                </div>
                <div className='card__container'>
                    {
                        projects && projects.map((project) =>
                            <Card key={project.id}
                                title={project.title}
                                image={project.image}
                                data={project.data}
                                stack={project.stack}
                                demoLink={project.data.demoLink}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Project