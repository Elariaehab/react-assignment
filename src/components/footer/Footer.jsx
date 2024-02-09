import React, { Component } from 'react'
import style from './footer.module.css'

export default class Footer extends Component {
    render() {
        return (
            <>
            
                <div className={style.footer }>
                    <div className=" container text-center py-4">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>LOCATION</h2>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                            <div className="col-md-4 ">
                                <h2>AROUND THE WEB</h2>
                                <div className="icons text-center fs-1">
                                <i className="fs-4 mx-2 text-center fa-brands fa-facebook  icon"></i>
                                <i className="fs-4 mx-2 text-center fa-brands fa-twitter  icon"></i>
                                <i className="fs-4 mx-2 text-center fa-brands fa-linkedin-in  icon"></i>
                                <i className="fs-4 mx-2 text-center fa-solid fa-globe  icon"></i>
                                
                                
                               
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>ABOUT FREELANCER</h2>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
