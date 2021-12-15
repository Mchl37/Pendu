import '../styles/Game.css'
import React, { useState, useEffect } from "react"

function Game() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://animalfinderapi.herokuapp.com/")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(result['data']);
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
        <ul>
            {items.map(item => (
            <li key={item.id}>
                {item}
            </li>
            ))}
        </ul>
        );
    }
}

export default Game