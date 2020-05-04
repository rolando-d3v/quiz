import React from 'react'

function Question({question}) {
    return (
        <div className="text-center text-light mb-3" >
            <h2> {question} </h2>
        </div>
    )
}

export default Question