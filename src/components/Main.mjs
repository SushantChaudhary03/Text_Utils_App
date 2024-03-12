import React, { useState } from 'react'

export default function Main(props) {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    let newTxt = text.toUpperCase();
    setText(newTxt);
    props.showAlert("Converted to upper case", "Success :");
    //   console.log("clicked");
  };

  const toLowerCase = () => {
    let LowerCase = text.toLowerCase("");
    setText(LowerCase);
    props.showAlert("Converted to lower case", "Success");

  };

  const ClearAllText = () => {
    setText("");
    props.showAlert("Clear all text", "Success :");

  };

  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("copy");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Coppyed your text", "Success :");

  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Clear all extra spaces", "Success :");

  };

  return (
    <>
    <div className=" h-screen pt-16 overflow-hidden" >
      <div className="main w-screen flex flex-col items-center mb-4" >
        <textarea className=' input bg-transparent w-1/2 h-64 rounded-lg p-2 border-2 border-green-950' placeholder='Type here...' value={text} onChange={handleOnChange} id='copy'></textarea>
      </div>
      <div className='btn w-1/2 mx-auto ' >
        <button className='w-28 h-10 bg-sky-500 text-white rounded-lg ml-4' onClick={toUpperCase}>UpperCase</button>
        <button className='w-28 h-10 bg-green-500 text-white rounded-lg mx-2 ' onClick={toLowerCase}>LowerCase</button>
        <button className='w-28 h-10 bg-orange-500 text-white rounded-lg mx-2' onClick={ClearAllText}>ClearAllText</button>
        <button className='w-28 h-10 bg-gray-500 text-white rounded-lg mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='w-28 h-10 bg-blue-500 text-white rounded-lg mx-2' onClick={handleExtraSpace}>Remove Space</button>

        <div>

          <h1 className='text-2xl font-semibold mt-4 '>Your Text Summary</h1>
          <p> {text.split(" ").filter((elem)=>{return elem.length!==0}).length} word and {text.length} character</p>
          <p>{0.008 * text.split(" ").filter((elem)=>{return elem.length!==0}).length} Minutes to read</p>
          <h1 className='text-2xl font-semibold mt-1'>preview</h1>
          <p>{text}</p>
        </div>
      </div>
      </div>
    </>
  )
}
