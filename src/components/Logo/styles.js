import styled, { keyframes } from 'styled-components'

const growupEffect = keyframes`
    0% {
        transform:  scale(1);
    }

    50% {
        transform: scale(1.09)
    }

    100% {
        transform: scale(1);
    }
`

const rigthEffect = keyframes`
    0% {
        transform:  translateX(0);
    }

    50% {
        transform: translateX(30px);
    }

    100% {
        transform: translateX(0);
    }   
`

const leftEffect = keyframes`
    0% {
        transform:  translateX(0);
    }

    50% {
        transform: translateX(-30px);
    }

    100% {
        transform: translateX(0);
    }   
`

export const Container = styled.div.attrs(props => {
    
})`
    max-width: 25rem;
    width: 100%;
    max-height: 25rem;
    height: 100%;

    display: flex;
    
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 15px;

    div {
        width: 33%;
        height: 100%;

        span { 
            width: 7rem;
            height: 7rem;

            background-color: #4763ed;
            border-radius: 50%;

            animation: ${growupEffect} 2.5s infinite ease-in-out;
        }

        &:nth-child(1) {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: start;

            span {
                animation: ${props => props.effect ? growupEffect : rigthEffect } 2.5s infinite ease-in-out;
                
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        &:nth-child(3) {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: end;

            span {
                animation: ${props => props.effect ? growupEffect : leftEffect } 2.5s infinite ease-in-out;
                
            }
        }
    }

`