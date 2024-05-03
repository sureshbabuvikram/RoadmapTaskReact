import React from 'react'

function Card({cardData}) {
  return <div className="col">
  <div className="card h-100">
    <img src={cardData.image} className="card-img-top" alt="Courses" title='All-Courses'/>
    <div className="card-body m-4">
      <h5 className="card-title">{cardData.head}</h5>
      <p className="card-text">{cardData.content}</p>
      <a className='fw-bold text-decoration-none'>READ MORE <i className="fa-solid fa-angles-right"></i></a>
    </div>
    <div className="card-footer text-muted m-4">
      <span>{cardData.date} {cardData.month} 2023</span>
      <span> <i className="fa-regular fa-face-grin-tongue-squint"></i> No Comments</span>
    </div>
  </div>
</div>
}

export default Card