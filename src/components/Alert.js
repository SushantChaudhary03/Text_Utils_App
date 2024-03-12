import React from 'react'

export default function Alert(props) {
  
  const close = () => {
    document.getElementById('alert').style.display = 'none';
  }

  return (
    <div className='h-10'>
     {props.alert && <div id="alert" className=' h-10 bg-blue-600 flex items-center px-6 text-white justify-between'>
        <p><span className='font-bold mr-4'>{props.alert.type}</span><span>{props.alert.msg}</span></p>
      <button className='text-4xl pb-2' onClick={close}>
        &times;
      </button>
      </div>}
      </div>
      
  )
}

