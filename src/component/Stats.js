import React from 'react'
import bargraph from "../images/BarGraph.jpg";
import piechart from "../images/PieChart.jpg"

const Stats = () => {
  return (
    <div>
      <h1 className='text-gray-600 text-6xl bold underline bg-slate-400 mt-8'>Have A Seek On Past Year Placement Graphs</h1>
      <div class="grid grid-cols-3 gap-4 mt-5">
      <img src={bargraph} alt="bargraph" class="h-80 w-80 object-cover ml-20 "  />
      <img src={piechart} alt="piechart"  class="h-80 w-80 object-cover mx-10"  />
      <img src={bargraph} alt="bargraph" class="h-80 w-80 object-cover ml-20 "  />
      </div>
      
    </div>
  )
}

export default Stats