import { Component } from "react";
import './../../imgs/Screenshot__1_-removebg-preview.png';
import homeStyle from './home.module.css'
import { Outlet } from 'react-router-dom'


export default class App extends Component {
    render(){
    return (
      <>
      <Outlet></Outlet>
      <div className={homeStyle.home}>
      <div className="container">
       <div className="main text-center vh-100 d-flex flex-column justify-content-center align-items-center">
         <img className='d-block'  src={require("./../../imgs/Screenshot__1_-removebg-preview.png")} alt=""/>
         <h2 className='fw-bold py-3 fs-1'>START FRAMEWORK</h2>
         <div className="line"><h2>ـــــــــــــــــ  <i _ngcontent-omg-c6="" class="fa-solid fa-star"></i>   ـــــــــــــــــ</h2></div>
         <p>Graphic Artist - Web Designer - Illustrator</p>
       </div>
      </div>
      </div>
      </>
   
    )
  }
  }