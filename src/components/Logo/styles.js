import styled from 'styled-components'
import { css } from 'styled-components'
import { 
    growupEffect, 
    rigthEffect, 
    leftEffect, 
    joinupHighEffect, 
    joinupHigherEffect } from './effects'

const effect_standard = css`${growupEffect} 2s infinite ease-in-out`
const effect_one = css`${rigthEffect} 2s ${.25}s 1 ease-in-out`
const effect_two = css`${leftEffect} 2s ${.5}s 1 ease-in-out`
const effect_three = css`${joinupHighEffect} 2s ${.75}s 1 ease-in-out`
const effect_four = css`${joinupHigherEffect} 2s ${1}s 1 ease-in-out`

export const Container = styled.div.attrs(props => {

})`
    max-width: 25rem;
    width: 100%;
    max-height: 25rem;
    height: 100%;

    display: flex;
    
    border-radius: 15px;
    position: relative;

    div {
        width: 33%;
        height: 100%;

        span { 
            width: 7rem;
            height: 7rem;

            background-color: #4763ed;
            border-radius: 50%;
            transition: all 3s ease-in-out;

            animation: ${effect_standard};
        }

        &:nth-child(1) {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: start;

            span {
                animation: ${props => props.effect ? effect_standard : effect_one };
                
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            span:nth-child(2) {
                animation: ${props => props.effect ? effect_standard : effect_three };
            }

            span:nth-child(3) {
                animation: ${props => props.effect ? effect_standard : effect_four };
            }
        }

        &:nth-child(3) {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: end;

            span {
                animation: ${props => props.effect ? effect_standard : effect_two };
                
            }
        }

    }
    p { 
        display: block;
        position: absolute;
        bottom: -12rem;

        color: #4763ed;
        font-size: 5.5rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 800;
    }

`