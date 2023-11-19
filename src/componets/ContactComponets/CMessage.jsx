import React, { useState } from 'react'

function CMessage() {
    //inte precis som jag ville
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        switch (e.target.name){
            case 'name':
                setName(e.target.value)
                setNameError(validateLength(e.target.value))
                setNameError('')
                break
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateLength(e.target.value))
                setEmailError('')
                break
            case 'message':
                setMessage(e.target.value)
                setMessageError(validateLength(e.target.value))
                setMessageError('')
                break
        }

    }

    const validateLength = (value) => {
        if (value.length < 1) 
            return true
        return false
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage('')
        for(let element of e.target){
            switch (element.name){
                case 'name':
                    setName(element.value)
                    setNameError(validateLength(element.value))
                    break
                case 'email':
                    setEmail(element.value)
                    setEmailError(validateLength(element.value))
                    break
                case 'message':
                    setMessage(element.value)
                    setMessageError(validateLength(element.value))
                    break
            }
        }

        if (!nameError && !emailError && !messageError){
            const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, message
                })
            })
            
            if (result.status === 200){
                alert('the message has been sent')
                setErrorMessage('')
            }else{
                setErrorMessage('Something went wrong.')
            }
        }
    }


  return (
    <>
    <section className="message">
        <div className="container">
            <div className="section-title">  
                <h2 >Leave us a message</h2>
                <h2 >for any information.</h2>
            </div>
            <div className="inner-container">       
            
                <form className='' onSubmit={handleSubmit} noValidate>  
                    <p className='errorMessage'>{errorMessage}</p>
                    <div>
                        <label>{`${nameError ? 'you must enter your name:' : ''}`}</label>
                        <input className={`${nameError ? 'error': ''}`} type="text" value={name} name="name" onChange={(e) => handleChange(e)} placeholder="Name*" tabIndex="1"/>
                    </div>
                    <div>
                        <label>{`${emailError ? 'Enter your e-mail:': ''}`}</label>
                        <input className={`${emailError ? 'error': ''}`} type="email" value={email} name="email" onChange={(e) => handleChange(e)}  placeholder="Email*" tabIndex="2"/>
                    </div>
                    <div>
                        <label>{`${messageError ? 'enter message': ''}`}</label>
                        <textarea className={`${messageError ? 'error': ''}`} type="text" value={message} name="message" onChange={(e) => handleChange(e)} cols="30" rows="10"  placeholder="Your Message*" tabIndex="3"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn-yellow" tabIndex="4">Send message<i className="fa-regular fa-arrow-up-right"></i></button>
                    </div> 
                </form>
            </div>
        </div>
    </section>
   
    </>

  )
}

export default CMessage