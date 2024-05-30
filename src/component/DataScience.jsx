import React from 'react'

function DataScience({data}) {
  return <div className='container'>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {
    data.map((e,i)=>{
        return e.type==="DataScience"? (<div className="col" key= {i}>
        <div className="card h-100">
          <img src={e.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{e.content}</h5>
            <p className="card-text">{e.content2}<span className="read-more"><strong>Read more</strong></span></p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">{e.date}</small>
          </div>
        </div>
      </div>
        ):""
    })
}
<div className="col">
      <div className="card h-100">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Top Product-Based Companies for Data Science Freshers</h5>
          <p className="card-text">In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing<span className="read-more"><strong>Read more</strong></span></p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">20 October 2023</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-2048x1072.webp" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Data Science Webinars and Workshops</h5>
          <p className="card-text">In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data<span className="read-more"><strong>Read more</strong></span></p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">20 October 2023</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp"
         className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Top Product-Based Companies for Data Scientists in 2024</h5>
          <p className="card-text">We all know about the kind of buzz surrounding data science right now, it is<span className="read-more"><strong>Read more</strong></span></p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">20 October 2023</small>
        </div>
      </div>
    </div>
  </div>
</div>
}

export default DataScience