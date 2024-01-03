
import React from 'react'

const Body = () => {
  return (
   <main className='brand container'>
  <div className='body-content'>
    <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className='body-btn'>
            <button>Shop Now</button>
            <button  className='secondary-btn'>Category</button>
        </div>

        <div className='shopping'>
        <p>Also Availble on</p>

        <div className='onlineStore-icons'>
            <img src="/images/amazon.png" alt="amzon" />
            <img src="/images/flipkart.png" alt="flipkart" />
        </div>
        </div>
    </div>
        <div className='brand-img'>
            <img src="/images/shoe_image.png" alt="brand" />
        </div>

   
    </main>
  )
}

export default Body;