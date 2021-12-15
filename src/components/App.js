import "../styles/App.css"

import Banner from "./Banner"
import Game from "./Game"

function App() {
    // const savedGame = localStorage.getItem()
    return (
        <div>
            <Banner />
            <Game />
        </div>
    )
}

export default App;