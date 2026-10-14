
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

   
    const [vida, setVida] = useState<number>(5);
    const [energia, setEnergia] = useState<number>(4);
    const [comida, setComida] = useState<number>(1);
    const [agua, setAgua] = useState<number>(2);
    const [luz, setLuz] = useState<boolean>(true);

    function alimentarClick() {
        if(vida === 0) return;
        setComida(Math.min(5, comida + 1));
    }
    function hidratarClick() {
        if(vida === 0) return;
        setAgua(Math.min(5, agua + 1));
    }
    
    function altenarLuzClick() {
        setLuz(!luz);
    }
     function cicloClick() {
        if(vida === 0) return;
        setComida(Math.max(0, comida - 1));
        if (comida === 0) {
            setVida(Math.max(0, vida - 1));
        }
    }
    let status = EMOJI_MAP.get("happy");
    if (agua === 0 || comida === 0 || energia === 0) {
        status = EMOJI_MAP.get("sick");
    }
    if (vida === 0) {
        status = EMOJI_MAP.get("dead");
    }



    return (
        <>
        <div className="emoji">
            <div className="face">
                {EMOJI_MAP.get(status) || "🫥"}
                {status}
            </div>
            <div className="atributos">
                <Atributo icone="❤️" valor={vida}></Atributo>
                <Atributo icone="🔋" valor={energia}></Atributo>
                <Atributo icone="💧" valor={agua}></Atributo>
                <Atributo icone="🍗" valor={comida}></Atributo>
                {luz && "💡"}
            </div>
            <div className="acoes">
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={altenarLuzClick}>{luz ? 'Desligar' : 'Ligar'} Luz</button>
                <button onClick={cicloClick}>Ciclo</button>
            </div>
        </div>
        </>
        
    )
}