import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='container mt-5 '>
      <h2 className='fs-2'>About TextCraft- Text utilities app</h2>
      <p className='fs-5' style={{fontWeight:'400'}}>TextCraft is a simple general purpose app created using ReactJS. This app provides the basic utilities for text management.</p>
      <p className='fs-5' style={{fontWeight:'400'}}>Here are some features of TextCraft</p>
      <ul className='fs-5' style={{fontWeight:'400'}}>
        <li>Convert text to UPPERCASE.</li>
        <li>Convert text to lowercase.</li>
        <li>Copy text to clipboard.</li>
        <li>Remove extra spaces from text.</li>
        <li>Get count of word in a text</li>
        <li>Get count of characters in a text</li>
        <li>Get average time required by person to read the tex</li>
      </ul>
      <p className='fs-5' style={{fontWeight:'400'}}><Link className='fw-bold' to="/"> Click here</Link> to get start</p>
      
    </div>
  )
}
