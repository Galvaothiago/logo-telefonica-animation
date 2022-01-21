import { useEffect, useState } from "react";
import { Container } from "./styles";

export function Logo() {
    const [changeEffect, setChangeEffect] = useState(true)

    const handleEffect = () => {
        setTimeout(() => {
            setChangeEffect(oldState => !oldState)
        }, 4000)
    }

    useEffect(() => {
        handleEffect()

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
            <p>Telefónica</p>
        </Container>
    )
}