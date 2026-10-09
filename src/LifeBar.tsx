import { useState } from "react"

export default function LifeBar(){
    const [valor, setValor] = useState<number>(0);
    let coracoes = "";
    for( let i = 0; i < 5; i++){
        if(i<valor)coracoes += "💖";
        else coracoes += "🩶";
    }
    function addHeart(){    
        setValor(valor === 5 ? 0 :valor + 1);
    }
    return(
        <>    
            <div className="lifeBar">
                {valor}{coracoes}
                <button onClick={addHeart}>AddHeart</button>
            </div>            
        </>
    )
}