import React,{useState} from 'react'

export default function TextArea(props) {
    const [txt,setTxt]=useState("");
  
  const change=(event)=>{
    setTxt(event.target.value)
  }

  const uppercase=()=>{
    let uppertxt=txt.toUpperCase();
    setTxt(uppertxt)
    props.showAlert('Converted to uppercase','Success')
  }
  const lowercase=()=>{
    let uppertxt=txt.toLowerCase();
    setTxt(uppertxt)
    props.showAlert('Converted to lowercase','Success')
  }
  const cleartxt=()=>{ 
    setTxt("")
    props.showAlert('Text cleared','Success')
  }
  const copytxt=()=>{ 
    navigator.clipboard.writeText(txt)
    props.showAlert('Text copied to clipboard','Success')
  }
  const removespaces=()=>{
    let newtxt=txt.split(/[ ]+/)
    setTxt(newtxt.join(" "))
    props.showAlert('Extra spaces removed','Success')

  }
  const defaultMsg=()=>{
    props.showAlert('Enter text first.');
  }

  return (
    <>
    <div >
      <h2 className='mt-5 mb-3'>{props.heading}</h2>
      <div className="mb-3">
        <textarea  className="form-control textArea mb-3"  id="exampleFormControlTextarea1"  rows="8"  value={txt} onChange={change} ></textarea>
        <button className="btn btn-primary mx-2 my-1" onClick={txt.length>0?uppercase:defaultMsg}>UPPERCASE</button>
        <button className="btn btn-primary mx-2 my-1" onClick={txt.length>0?lowercase:defaultMsg}>lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={txt.length>0?cleartxt:defaultMsg}>Clear</button>
        <button className="btn btn-primary mx-2 my-1" onClick={txt.length>0?copytxt:defaultMsg}>Copy</button>
        <button className="btn btn-primary mx-2 my-1" onClick={txt.length>0?removespaces:defaultMsg}>Remove Extra Spaces</button>
      </div>
    </div>
    
    <div className="container my-4">
      <h3>Text Summary</h3>
      <p className='fw-1'>Word Count: <b className='b'>{txt.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}</b></p>
      <p className='fw-1'>Character Count: <b className='b'> {txt.length}</b></p>
      <p className='fw-1'>Time to read words: <b className='b'>{txt.length>0?txt.split(" ").length*0.008:0}</b></p>
    </div>
    </>
  )
}
