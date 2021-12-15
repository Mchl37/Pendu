import '../styles/Word.css'

const Word = ({ currentWord, usedLetter, result }) => {
    return (
        <div className="current-word">
            {
                currentWord.split('').map((letter, key) => {
                    let status = "found"

                    if (usedLetter.indexOf(letter) === -1) {
                        if (result === -1) {
                            status = "lost"
                        } else {
                            status = "notfound"
                        }
                    }

                    return <span key={ "letter_" + key } className={ status }>{ status === "found" ? letter : (result === -1 ? letter : "?") }</span>
                })
            }
        </div>
    )
}

export default Word