import React from 'react'
import "../styles/Contact.scss"
const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>

            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='"ABC'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" required placeholder='"abc@gmial.com'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='"I am missing you!'/>
                </div>

                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact