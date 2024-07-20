import React from 'react'
import './Header.css'
import { profile1 } from '../../images'
import Facts from './Facts/facts'

const Header = () => {
    return (
        <header id='header' className='blur-effect'>
            <div className='stroke__text intro__text' />
            <div className='section__wrapper header__container'>
                <div className='column intro__container blur-effect'>
                    <div className='header__info'>
                        <div className='header__info__top'>
                            Hello There! I'm <span className='color__primary'>Shubham Jain</span>
                        </div>
                        <div className='header__info__middle'>
                            <h1 className='primary__title header__title'>I'M A FULL STACK DEVELOPER</h1>
                            <p className='header__description text__muted'>
                                I dissect intricate user experience challenges to engineer
                                integrity-focused solutions that resonate with billions of users.
                            </p>
                        </div>
                        <Facts />
                        <div className='header__info__bottom'>
                            <button className='btn'>Download CV</button>
                            <a href='mailto:shubham.1997nalwaya@gmail.com' className='btn'>Email Me</a>
                        </div>
                    </div>
                </div>
                <div className='column profile__wrapper'>
                    <div className='profile__photo__container'>
                        <img src={profile1} className='profile__photo' alt='' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header