import "../styles/Keyboard.css"
import { useEffect } from "react"

function Keyboard({ action }) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    /* const GOOD_LETTER = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbnéàâêè";

    const handleKeyDown = (e) => {
        if(GOOD_LETTER.includes(e.key)) {
            console.log("A key was pressed", e.key)
            action(e.key)
        }
    }

    useEffect(()=> {
        window.addEventListener("keydown", handleKeyDown, false);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, []) */

    return (
        <div className="alphabet">
            {
                alphabet.map((letter, key) => 
                <button className='letter' key={ "keyboard_" + key } value={ letter } onClick={ () => action(letter) }>{ letter }</button>)
            }
        </div>
    )
}

export default Keyboard