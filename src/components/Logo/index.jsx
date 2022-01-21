import { useEffect, useState } from "react";
import { Container } from "./styles";

export function Logo() {
    const [changeEffect, setChangeEffect] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setChangeEffect(oldState => !oldState)
        }, 2500)
    }, [changeEffect])
    return (
        <Container effect={changeEffect}>
            <div>
                <span ></span>
            </div>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <span></span>
            </div>
        </Container>
    )
}