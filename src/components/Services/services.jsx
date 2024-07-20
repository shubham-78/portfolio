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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
                                voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae
                                eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!
                            </p>
                        </div>
                        <div className='service__bottom'>
                            <button className='btn btn__primary'>Read more</button>
                        </div>
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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
                                voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae
                                eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!
                            </p>
                        </div>
                        <div className='service__bottom'>
                            <button className='btn btn__primary'>Read more</button>
                        </div>
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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
                                voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae
                                eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!
                            </p>
                        </div>
                        <div className='service__bottom'>
                            <button className='btn btn__primary'>Read more</button>
                        </div>
                    </article>
                    {/* End Ui/UX*/}
                </div>
            </div>
        </section>
    )
}

export default Services