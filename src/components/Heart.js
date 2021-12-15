const Heart = ({ attempt, maxAttempt }) => {
    return (
        <div className="life">
            {
                attemptToHeart(attempt).map((value, index) => {
                    return <span>{value}</span>
                })
            }
        </div>
    )
}

function attemptToHeart(attempt, maxAttempt) {
    let hearts = []
    for (let i = 0; i <= maxAttempt; i++ ) {
        if (i <= attempt) {
            hearts.push(0)
        } else {
            hearts.push(1)
        }
    }
    return hearts
}

export default Heart