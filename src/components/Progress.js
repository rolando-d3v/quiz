import React from 'react'

const Progress = ({current, total}) => {
    return (
        <div className="text-right text-light ">
            <h3>
                Question {current} of {total}
            </h3>
            
        </div>
    )
}

export default Progress
