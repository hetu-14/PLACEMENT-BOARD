import React from 'react'
import JobItem from './JobItem'


function Placement({ user, setProgress }) {
    return (
        <div>
           
            <JobItem setProgress={setProgress} />
            
            
        </div>
    )
}

export default Placement
