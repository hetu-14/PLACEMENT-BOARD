import React from 'react'

const Stats = () => {
    return (
        <div>
            <h1 className='text-gray-600 text-6xl bold underline bg-slate-400 mt-8'>Have A Seek On Past Year Placement Graphs</h1>
            <div class="grid grid-cols-3 gap-4 mt-5">
                <img src="/images/BarGraph.jpg" alt="bargraph" class="h-80 w-80 object-cover ml-20 " />
                <img src="/images/PieChart.jpg" alt="piechart" class="h-80 w-80 object-cover mx-10" />
                <img src="/images/BarGraph.jpg" alt="bargraph" class="h-80 w-80 object-cover ml-20 " />
            </div>

        </div>
    )
}

export default Stats