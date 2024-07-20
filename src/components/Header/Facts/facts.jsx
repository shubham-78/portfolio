import React, { useEffect, useState } from 'react'
import './Facts.css'
import Odometer from 'react-odometerjs'

const Facts = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setExperience(4)
            setProjects(10)
            setClients(2.5)
        }, 1000);
        return () => { clearTimeout(timeoutId) }
    }, [])

    return (
        <div className='fact__container'>
            <div className='fact__item'>
                <div className='count__container'>
                    <Odometer value={experience} />
                    <span className='indicator'>+</span>
                </div>
                <p className='name'>Years of Experience</p>
            </div>

            <div className='fact__item'>
                <div className='count__container'>
                    <Odometer value={projects} />
                    <span className='indicator'>+</span>
                </div>
                <p className='name'>Completed Project</p>
            </div>

            <div className='fact__item'>
                <div className='count__container'>
                    <Odometer value={clients} />
                    <span className='indicator'>K</span>
                </div>
                <p className='name'>Satisfied Clients</p>
            </div>
        </div>
    )
}

export default Facts