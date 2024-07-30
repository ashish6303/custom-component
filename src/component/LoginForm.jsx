import React from 'react'
import CustomButton from '../customComponents/CustomButton'

function LoginForm() {

    const handleSubmit = () => {
        alert('Button is clicked')
    }

    return (
        <div>
            <h1>Login Form</h1>

            <CustomButton
                variant="contained"
                size="large"
                name="Submit"
                onClick={handleSubmit}
                color={'primary'}
                // isSubmit
                style={{ borderRadius: '8px', margin: '10px',  }}
                className={''}
            >Submit</CustomButton>

            <CustomButton
                variant="outlined"
                size={'small'}
                name="cancel"
                isSubmit
                color={'danger'}
                backgroundColor="secondary"
                className={'test-class'}
            />
        </div>
    )
}

export default LoginForm