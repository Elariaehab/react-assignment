
      import React, { Component } from 'react'
      import './../../imgs/poert1.png';
      import './../../imgs/port2.png';
      import './../../imgs/port3.png';
      import portStyle from './Portfolio.module.css'
      
      export default class Portfolio extends Component {
        render() {
          return (
      <>
      <div className={portStyle.port}>
        
      <div className="container p-5 ">
        <h2 className='fs-1'>PORTFOLIO COMPONENT</h2>
        <div className="line"><h2>ـــــــــــــــــ  <i _ngcontent-omg-c6="" class="fa-solid fa-star"></i>   ـــــــــــــــــ</h2></div>
      
        <div className="row">
          <div className="col-md-4">
            <div className={portStyle.imaage}>
            <img className='rounded w-100' src={require('./../../imgs/poert1.png')} alt="" />
            <div className={portStyle.imglayer}>
            <i _ngcontent-wao-c19="" class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={portStyle.imaage}>
            <img className='rounded w-100' src={require('./../../imgs/port2.png')} alt="" />
            <div className={portStyle.imglayer}>
            <i _ngcontent-wao-c19="" class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={portStyle.imaage}>
            <img className='rounded w-100' src={require('./../../imgs/port3.png')} alt="" />
            <div className={portStyle.imglayer}>
            <i _ngcontent-wao-c19="" class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 pt-5">
            <div className={portStyle.imaage}>
            <img className='rounded w-100' src={require('./../../imgs/poert1.png')} alt="" />
            <div className={portStyle.imglayer}>
            <i _ngcontent-wao-c19="" class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
          <div className="col-md-4 pt-5">
            <div className={portStyle.imaage}>
            <img className='rounded w-100' src={require('./../../imgs/port2.png')} alt="" />
            <div className={portStyle.imglayer}>
            <i _ngcontent-wao-c19="" class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
          <div className="col-md-4 pt-5">
            <div className={portStyle.imaage}>
            <img className='rounded w-100' src={require('./../../imgs/port2.png')} alt="" />
            <div className={portStyle.imglayer}>
            <i _ngcontent-wao-c19="" class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      
      
      
      </>
          )
        }
      }
      
 