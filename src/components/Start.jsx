import React from 'react'
import { Link } from 'react-router-dom';
import "../start.css";

function Start() {


    return (
        <>
            <div className='app1'>
                <div className="start">
                    <div class="title">
                        <h1>Quiz<br />Competition </h1>
                    </div>

                        <div className="form">
                            <div class="group">
                    <form>
                                <input type="text" required />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Name</label>
                                <Link to="/quiz">
                                    <button class="glow-on-hover" type="button">Start</button> 
                                    </Link>
                    </form>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Start