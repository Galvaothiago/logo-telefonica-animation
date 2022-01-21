import styled from 'styled-components'
import { growupEffect, rigthEffect, leftEffect, joinupHighEffect, joinupHigherEffect } from './effects'

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

            span:nth-child(2) {
                animation: ${props => props.effect ? growupEffect : joinupHighEffect } 2.5s infinite ease-in-out;
            }

            span:nth-child(3) {
                animation: ${props => props.effect ? growupEffect : joinupHigherEffect } 2.5s infinite ease-in-out;
            }
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