import React from 'react'
import Card from './Card'

function Career({data}) {
  const careerData=data.filter(item=>item.head === "Career Development")
  return <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-3 mb-5">
  {
    careerData.map((cardData,i)=>{
      return <Card cardData={cardData} key={i} />
      
    })
  }
  </div>
}

export default Career