import React from "react";

export default function Alert(props) {
  return (
    props.msg &&
      <div className="position-fixed bottom-0 end-0 p-2 mx-2" style={{ zIndex: 11, border:'2px solid black', borderRadius:'10px'}}>
        <div  id="liveToast"   role="alert"  aria-live="assertive"  aria-atomic="true">
          <div className="toast-header border-bottom ">
            <span style={{fontWeight:'bolder'}} className="me-auto text-black ">Alert</span>
          </div>
          <div className="toast-body fst-italic">
            <span style={{fontWeight:'500'}}>{props.msg}</span>
          </div>
        </div>
      </div>
    
  );
}
