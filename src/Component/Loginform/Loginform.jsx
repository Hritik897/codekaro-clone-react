import React from 'react'
import './Loginform.css'

const Loginform = (props) => {
    return (
        <>
<div className='formcontainer'>
<div className='form'>
                <div className='heading-login'>
                    <h1>Sign Up for Free</h1>
                    <p onClick={props.onCancel}>X</p>
                </div>
                <div className='form-loginbtn'>
                    <button>Continue with Google</button>
                    <button>Continuewith Email</button>
                </div>

            </div>
</div>
            
        </>
    )
}

export default Loginform