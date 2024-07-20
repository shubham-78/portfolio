import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <section id='contact'>
            <div className='section__wrapper contact__container'>
                <div className='section__header'>
                    <h2 className='primary__title'>Contact Me</h2>
                    <div className='text__muted descridivtion'>
                        Ready to take your digital presence to the next level? Whether
                        you're looking to launch a new website, revamp an existing one, or need expert advice
                        on the best web technologies, I'm here to help. Reach out to discuss your project, ask
                        questions, or just say hello.
                    </div>
                </div>
                <div className='contact__group'>
                    <form >
                        <input type='text' name='name' placeholder='Your Full name' required />
                        <input type='email' name='email' placeholder='Your Email' required />
                        <textarea name='message' rows="7" placeholder='Your Message' />
                        <button type='submit' className='btn btn__primary'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact