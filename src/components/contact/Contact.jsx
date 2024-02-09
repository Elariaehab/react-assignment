import React, { Component } from 'react'
import contactStyle from './contact.module.css'

export default class Contact extends Component {
  render() {
    return (
<>
<div className={contactStyle.contact}>
  <div className="container vh-100">
  <h2 className='fs-1 fw-bold text-center pt-5'>CONATCT SECTION</h2>
  <div className="line text-center"><h2>ـــــــــــــــــ  <i _ngcontent-omg-c6="" class="fa-solid fa-star"></i>   ـــــــــــــــــ</h2></div>
<div className="contactform d-flex pt-5 flex-column align-items-center">
  <input type="text" className='form-control w-50 m-2  ' placeholder='Enter Your Name' />
  <input type="number" className='form-control m-2   w-50 ' placeholder='Enter Your Age' />
  <input type="email" className='form-control w-50 m-2   ' placeholder='Enter Your Email' />
  <input type="password" className='form-control w-50 m-2 ' placeholder='Enter Your Password' />
  <button className='btn btn-success'>Send Message</button>
</div>
  </div>
</div>

</>
    )
  }
}
