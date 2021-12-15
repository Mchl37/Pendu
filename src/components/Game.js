import '../styles/Game.css'
import { useState } from "react"

import CallApi from '../api/CallApi'
import Keyboard from './Keyboard'
import Word from './Word'

function Game() {
    let result = 0    // -1 : victory | 0 : neutral | 1 : win
    let currentWord = <CallApi /> + ''
    
    const [attempt, setAttempt] = useState(10)
    const [usedLetter, setUsedLetter] = useState([])

    const initGame = () => {
        currentWord = ""
        setUsedLetter([])
        result = 0
        setAttempt(10)
    }

    const clickLetter = (letter) => {
        console.log(letter)
        
        // traitement des lettres tapées
        if (usedLetter.indexOf(letter) === -1) {
            setUsedLetter(usedLetter => [...usedLetter, letter])
            if (currentWord.indexOf(letter) === -1) {
                setAttempt(attempt - 1)
            }
            result = 1
            for (let i = 0; i < currentWord.length; i++) {
                if (usedLetter.indexOf(currentWord[i]) === -1) {
                    result = 0
                }
            }
            if (attempt <= 1 && result === 0) {
                result = -1
            }
        } else {
            console.log("The letter is already in")
        }
    }

    return (
        <div id="game">
            Résultat : { result }
            <br />
            Tentatives : { attempt }
            {
                (currentWord != null) && <Word currentWord = { currentWord } usedLetter={ usedLetter }
                result={ result } />
            }

            {
                result == 0 && <Keyboard action={ clickLetter }/>
            }
            
        </div>
    )
}

export default Game