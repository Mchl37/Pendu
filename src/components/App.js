import '../styles/App.css';
import React, { useState, useEffect } from "react"
//import Banner from './Banner';
//import Game from './Game';

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://animalfinderapi.herokuapp.com/")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(result.word);
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
            <li>
                {item}
            </li>
            ))}
        </ul>
        );
    }
}

export default App;
