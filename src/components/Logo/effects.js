import { keyframes } from "styled-components"

export const growupEffect = keyframes`
    0% {
        transform:  scale(1);
    }

    50% {
        transform: scale(1.15)
    }

    100% {
        transform: scale(1);
    }
`

export const rigthEffect = keyframes`
    0% {
        transform:  translateX(0);
    }

    50% {
        transform: translateX(140px);
    }

    100% {
        transform: translateX(0);
    }   
`

export const leftEffect = keyframes`
    0% {
        transform:  translateX(0);
    }

    50% {
        transform: translateX(-140px);
    }

    100% {
        transform: translateX(0);
    }   
`

export const joinupHighEffect = keyframes`
    0% {
        transform:  translateY(0);
    }

    50% {
        transform: translateY(-140px);
    }

    100% {
        transform: translateY(0);
    }   
`

export const joinupHigherEffect = keyframes`
    0% {
        transform:  translateY(0);
    }

    50% {
        transform: translateY(-290px);
    }


    100% {
        transform: translateY(0);
    }  
`
