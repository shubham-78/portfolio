import React from 'react'
import './Footer.css'
import { menu, socialHandles } from '../../data'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='section__wrapper'>
                <ul className='nav__link__container'>
                    {
                        menu.map((list, index) => (
                            <li key={index}>
                                <Link
                                    className='nav__link'
                                    to={list.name.toLowerCase()}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {list.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='social__handles__container'>
                    {
                        socialHandles.map((list, index) => (
                            <a href={list.link} className='icon__container social__handle' target='__blank' key={index}>
                                {list.icon}
                            </a>
                        ))
                    }
                </div>
                <div className='copyright__container'>
                    <h3>Copyright &copy; All right reserved - | 2024</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer