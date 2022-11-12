
import React from 'react'
import "./style.css";
const Card=({item, handleClick})=> {
  const{img,title,price}=item;
  return (
<div id="services" className='col-md-3 services'>
    <div className="card icon-box user " style={{ width: "18rem" , height:"35rem"}}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">The price is: {price}</p>
        
      </div>
      <button type="button" class="btn btn-warning see-graph"><a href="../images/graph1.jpg">See Graph</a></button>
    </div>
    </div>
  )
}

export default Card;
