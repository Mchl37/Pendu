import { useState, useEffect } from "react"

function CallApi() {
    const [word, setWord] = useState(undefined)
    
    useEffect (() => {
        (async () => {
            const { data } = await getWord()
            setWord(data)
        })()
        return () => {}
    }, [])

    const getWord = async () => {
        const dataJson = await fetch("https://animalfinderapi.herokuapp.com/word")
        return await dataJson.json()
    }

    if (!word) {
        return <p>Chargement...</p>
    }

    return (
        <div>
            { word.word }
        </div>
    )
}

export default CallApi