import React from 'react'
import Card from './Card'


function CyberSecurity({data}) {
  const cyberData=data.filter(item=>item.head === "Cyber Security")
  return <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-3 mb-5">
  {
    cyberData.map((cardData,i)=>{
      return <Card cardData={cardData} key={i} />
      
    })
  }
  </div>
}

export default CyberSecurity