import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='container-fluid text-bg-dark  pt-5 p-4 footer'>
        <div className="row d-flex align-content-center justify-content-center lh-1">
            <div className="col-sm-3">
                <ul className=' text-left'>
                    <li  className='list-group-item disabled fs-5 lh-2 mb-2'>Links</li>
                    <li  className='list-group-item'>Contact</li>
                    <li className='list-group-item'>About</li>
                    <li className='list-group-item'>Services</li>
                    <li className='list-group-item'>Registration</li>
                    <li className='list-group-item'>Coustmore Care</li>
                </ul>
            </div>
            <div className="col-sm-3">
            <ul className='decoration-none text-left'>
                    <li  className='list-group-item fs-5  mb-2'>Guides</li>
                    <li className='list-group-item'>Contact</li>
                    <li  className='list-group-item'>About</li>
                    <li className='list-group-item'>Services</li>
                    <li className='list-group-item'>Registration</li>
                    <li className='list-group-item'>Coustmore Care</li>
                </ul>
            </div>
            <div className="col-sm-3">
            <ul className='decoration-none text-left'>
                    <li  className='list-group-item fs-5  mb-2'>Projects</li>
                    <li className='list-group-item'>Contact</li>
                    <li className='list-group-item'>About</li>
                    <li className='list-group-item'>Services</li>
                    <li className='list-group-item'>Registration</li>
                    <li className='list-group-item'>Coustmore Care</li>
                </ul>
                <span className="input-group">
                <input className='form-control' type='search' placeholder='Find Topic' />
                <span className='input-group-text text-bg-light' ><FaLocationArrow /></span>
                </span>

            </div>
        </div>
        <div className="row p-4 text-center d-flex align-content-center justify-content-center ">
            <div className="col-sm-4 ms-2 ">Powerded By Sharma ji  for the help of our contributors.</div>
            <div className="col-sm-2 "></div>
            <div className="col-sm-4 ">All Code Reserved @ <span className='text-warning'> Anshul Sharma </span>Copyright</div>
        
        </div>

    </div>
  )
}
