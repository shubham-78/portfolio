import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import { SiWebmoney } from "react-icons/si";
import { menu } from '../../data';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';
import gsap from 'gsap'

const NavBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > 0) {
            return setVisible(true)
        }
        return setVisible(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (visible) {
            gsap.fromTo(".navbar__container", {
                y: -250,
                width: '100%'
            },
                {
                    y: 0,
                    top: 0,
                    zIndex: 100
                }
            )
            return;
        }
    }, [visible])

    return (
        <nav className={`navbar__container ${visible ? "visible" : ""}`}>
            {
                showSidebar ? <div className='overlay' onClick={() => setShowSidebar(!showSidebar)}></div> : ""
            }
            <div className='logo__container' onClick={() => scroll.scrollToTop({ duration: 500 })}>
                <SiWebmoney />
            </div>
            <div className={`tab__group ${showSidebar ? 'show' : ''}`}>
                <span className='icon__container close__btn' onClick={() => setShowSidebar(!showSidebar)}>
                    <FaTimes />
                </span>
                {
                    menu.map((list, index) => (
                        <Link
                            activeClass='active'
                            className='tab__item name'
                            to={list.name.toLowerCase()}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            key={index}
                        >
                            {list.name}
                        </Link>
                    ))
                }
            </div>
            <div className='nav__buttons__group'>
                <button className='btn btn__primary'>
                    Hire Me
                    <FaArrowUpRightFromSquare />
                </button>
                <FaBarsStaggered className="menu" onClick={() => setShowSidebar(!showSidebar)}></FaBarsStaggered>
            </div>
        </nav>
    )
}

export default NavBar