
import { useState } from "react";
import "./Emoji.css";


type EMOJI_KEYS = "happy" | "sick" | "dead";
const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "🙂"],
    ["sick", "🤢"],
    ["dead", "😵"],
]);
import Atributo from "./Atributo";
export default function Emoji() {

    const [status, setStatus] = useState<EMOJI_KEYS>("happy")
    const [vida, setVida] = useState<number>(5);
    const [energia, setEnergia] = useState<number>(4);
    const [comida, setComida] = useState<number>(1);
    const [agua, setAgua] = useState<number>(2);


    function alimentarClick() {
        setComida(Math.min(5, comida + 1));
    }

    function hidratarClick() {
        setAgua(Math.min(5, agua + 1));
    }
    
    function altenarLuzClick() {
        console.log("Status: ", status);
        console.log("Dead!");
        setStatus("dead");
        console.log("Status: ", status);
    }
     function cicloClick() {
        switch (status) {
            case "dead":
                setStatus("happy");
        }
    }

    return (
        <>
        <div className="emoji">
            <div className="face">
                {EMOJI_MAP.get(status) || "🫥"}
            </div>
            <div className="atributos">
                <Atributo icone="❤️" valor={vida}></Atributo>
                <Atributo icone="🔋" valor={energia}></Atributo>
                <Atributo icone="💧" valor={agua}></Atributo>
                <Atributo icone="🍗" valor={comida}></Atributo>
            </div>
            <div className="acoes">
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={altenarLuzClick}>Ligar Luz</button>
                <button onClick={cicloClick}>Ciclo</button>
            </div>
        </div>
        </>
        
    )
}