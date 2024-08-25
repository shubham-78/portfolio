import React from 'react'
import './Services.css'
import { FaPaintBrush } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
const Services = () => {
    return (
        <section id='services'>
            <div className='section__wrapper services__container'>
                <div className='section__header center'>
                    <h2 className='primary__title'>Services</h2>
                    <h3 className='text__muted description'>
                        I transform your ideas, and consequently your desires, into a
                        distinctive web project that both inspires you and captivates your customers.
                    </h3>
                </div>
                <div className='services__group'>
                    <article className='service'>
                        <div className='service__top'>
                            <div className='icon__container'>
                                <BsCodeSquare className='icon' />
                            </div>
                            <h3 className='title'>Frontend Development</h3>
                        </div>
                        <div className='service__middle'>
                            <p className='text__muted description'>
                                I specialize in creating engaging, intuitive, and responsive user interfaces 
                                that provide seamless experiences across various devices and platforms. 
                                My expertise lies in transforming complex design concepts into functional 
                                and visually appealing web applications.
                            </p>
                        </div>
                        {/* <div className='service__bottom'>
                            <button className='btn btn__primary'>Read more</button>
                        </div> */}
                    </article>
                    {/* End Frontend*/}

                    <article className='service' style={{ "--color-primary": "var(--color-success)" }}>
                        <div className='service__top'>
                            <div className='icon__container'>
                                <FaPaintBrush className='icon' />
                            </div>
                            <h3 className='title'>Backend Development</h3>
                        </div>
                        <div className='service__middle'>
                            <p className='text__muted description'>
                                I specialize in designing and building robust server-side solutions that 
                                power scalable and efficient applications. My backend development expertise 
                                spans a variety of technologies and methodologies, enabling me to deliver 
                                high-performance systems that seamlessly integrate with front-end components 
                                and third-party services.
                            </p>
                        </div>
                        {/* <div className='service__bottom'>
                            <button className='btn btn__primary'>Read more</button>
                        </div> */}
                    </article>
                    {/* End Backend*/}

                    <article className='service' style={{ "--color-primary": "blueviolet" }}>
                        <div className='service__top'>
                            <div className='icon__container'>
                                <TfiWrite className='icon' />
                            </div>
                            <h3 className='title'>System Design</h3>
                        </div>
                        <div className='service__middle'>
                            <p className='text__muted description'>
                                System design is at the core of my approach to building scalable, resilient, and 
                                efficient software solutions. I excel in translating complex requirements into 
                                robust architectures that meet both functional and non-functional needs, ensuring 
                                that systems can handle growth and change gracefully.
                            </p>
                        </div>
                        {/* <div className='service__bottom'>
                            <button className='btn btn__primary'>Read more</button>
                        </div> */}
                    </article>
                    {/* End Ui/UX*/}
                </div>
            </div>
        </section>
    )
}

export default Services