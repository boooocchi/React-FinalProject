import React from 'react'
import styled from 'styled-components'

import {
    StyledContainer,
    StyledButton,
    StyledInput,
    StyledForm,
    StyledHeadingTwo
} from './Login.styled'

const Login = ({ setUser }) => {
    const [username, setUsername] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(username)
    }

    return (
        <StyledContainer>
            <StyledHeadingTwo color="#00ff00">Login</StyledHeadingTwo>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                    type="text"
                    placeholder='Input username'
                    onChange={e => setUsername(e.target.value)}
                />
                <StyledButton type='submit'>Login</StyledButton>
            </StyledForm>
        </StyledContainer>
    )
}

export default Login