const Word = ({ currentWord, usedLetter, result }) => {
    return (
        <div>
            {
                currentWord.split('').map((letter, key) => {
                    let status = "found"

                    if (usedLetter.indexOf(letter) === -1) {
                        status = "notfound"
                    }

                    if (result === -1) {
                        status = "lost"
                    }

                    return <span key={ "letter_" + key } className={ status }>{ status === "found" ? letter : (result === -1 ? letter : "?") }</span>
                })
            }
        </div>
    )
}

export default Word