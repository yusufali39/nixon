import React, { useEffect } from 'react'
import "./preloader.css"
import { preLoaderAnim } from '../animations';

const PreLoader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[]);
  return (
    <div className='preloader'>
        <div className="texts-container">
            <span>hello,</span>
            <span>namaste,</span>
            <span>Salam.</span>
        </div>
    </div>
  )
}

export default PreLoader