import React from 'react'
import CustomButton from '../customComponents/CustomButton'

function LoginForm() {
    return (
        <div>
            <h1>Login Form</h1>

            <CustomButton
                variant="contained"
                size="large"
                name="Submit"
                // onClick={handleSubmit}
                isSubmit
            />

            <CustomButton
                variant="contained"
                size="large"
                name="Submit"
                // onClick={handleSubmit}
                isSubmit
                color="primary"
                backgroundColor="secondary"
            >test</CustomButton>
        </div>
    )
}

export default LoginForm