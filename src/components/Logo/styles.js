import styled from 'styled-components'

export const Container = styled.div`
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
        }

        &:nth-child(1) {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: start;
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
        }
    }

`