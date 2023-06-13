import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tooltipImage, setTooltipImage] = useState('');
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipStyle, setTooltipStyle] = useState({
    textSize: '14px',
    padding: '5px',
    textColor: '#000000',
    backgroundColor: '#ffffff',
    cornerRadius: '4px',
    tooltipWidth: '150px',
    arrowWidth: '0px',
    arrowHeight: '0px',
  });
  const [selectedButton, setSelectedButton] = useState('');

  const handleTextChange = (event) => {
    setTooltipText(event.target.value);
  };

  const handleStyleChange = (event) => {
    const { name, value } = event.target;
    setTooltipStyle((prevStyle) => ({ ...prevStyle, [name]: value }));
  };
  const handleImageChange = (event) => {
    setTooltipImage(event.target.value);
  };
  const handleButtonSelect = (event) => {
    setSelectedButton(event.target.value);
  };

  const tooltip = {
    text: tooltipText,
    style: tooltipStyle,
    image: tooltipImage
  };

  return (
    <div className="app">
      <div className="form">
      <div><label htmlFor="text">Target Element</label></div>
      <select style = {{width: 547}} value={selectedButton}
        onChange={handleButtonSelect} id="cars" name="button">
        <option value="">select button</option>
        <option value="button1">button1</option>
        <option value="button2">button2</option>
        <option value="button3">button3</option>
        <option value="button4">button4</option>
        <option value="button5">button5</option>
      </select>
      
        <div><label htmlFor="text">Tooltip Text:</label></div>
        <div><input
        style = {{width: 547}}
          type="text"
          id="text"
          value={tooltipText}
          onChange={handleTextChange}
        /></div>

        <label htmlFor="textSize">Text Size:</label>
        <label className="ind" htmlFor="padding"> Padding:</label><br/>
        <input
        className="inp"
        style = {{width: 236}}
          type="number"
          id="padding"
          name="padding"
          value={tooltipStyle.padding}
          onChange={handleStyleChange}
        />
        

        
        <input
        style = {{width: 236}}
          type="number"
          className="ip"
          id="textSize"
          name="textSize"
          value={tooltipStyle.textSize}
          onChange={handleStyleChange}
        /><br/>
        <br/>
        <label htmlFor="textColor">Text Color:</label><br/>
        <input
        style = {{width: 547}}
          type="color"
          id="textColor"
          name="textColor"
          value={tooltipStyle.textColor}
          onChange={handleStyleChange}
        /><br/>
        <label htmlFor="backgroundColor">Background Color:</label><br/>
        <input
        style = {{width: 547}}
          type="color"
          id="backgroundColor"
          name="backgroundColor"
          value={tooltipStyle.backgroundColor}
          onChange={handleStyleChange}
        />
<br/>
        <label htmlFor="cornerRadius">Corner Radius:</label>
        <label className="in" htmlFor="tooltipWidth">Tooltip Width:</label><br/>
        <input
        style = {{width: 236}}
          type="number"
          className="inp"
          id="tooltipWidth"
          name="tooltipWidth"
          value={tooltipStyle.tooltipWidth}
          onChange={handleStyleChange}
        />

        
        <input
        style = {{width: 236}}
          type="number"
          className="ip"
          id="cornerRadius"
          name="cornerRadius"
          value={tooltipStyle.cornerRadius}
          onChange={handleStyleChange}
        /><br/>

        <label htmlFor="arrowWidth">Arrow Width:</label>
        <label className="in" htmlFor="arrowHeight">Arrow Height:</label><br/>
        <input
        style = {{width: 236}}
          type="number"
          id="arrowHeight"
          className="inp"
          name="arrowHeight"
          value={tooltipStyle.arrowHeight}
          onChange={handleStyleChange}
        />

        
        <input
        style = {{width: 236}}
          type="number"
          className="ip"
          id="arrowWidth"
          name="arrowWidth"
          value={tooltipStyle.arrowWidth}
          onChange={handleStyleChange}
        />
        <br/>
      <label htmlFor="image">Tooltip Image URL:</label>
        <input
          style = {{width: 547}}
          type="text"
          id="image"
          value={tooltipImage}
          onChange={handleImageChange}
        />
      </div>
      
    
      <div className="tooltip-preview">
        
          <>
            <button className="tooltip-button1">
            Button 1 
            </button>
            {selectedButton === 'button1' && (
               
          <div
          className={`tooltip ${selectedButton}`}
          style={{
            fontSize: tooltip.style.textSize,
            padding: tooltip.style.padding,
            color: tooltip.style.textColor,
            backgroundColor: tooltip.style.backgroundColor,
            borderRadius: tooltip.style.cornerRadius,
            width: tooltip.style.tooltipWidth,
          }}
        >
          { tooltipImage  && (<img src={tooltip.image} alt="Tooltip Image" />)}
          
          <span className='texttool'>{tooltip.text}</span>
          
          <span
                className={`tooltip-arrow`}
        style={{
          width: tooltip.style.arrowWidth,
          height: tooltip.style.arrowHeight,
        }}
      ></span>
    </div>
  
)}
</>
<>
        <button className="tooltip-button2">
        Button 2
    </button>
        {selectedButton === 'button2' && (
      <div
          className={`tooltip ${selectedButton}`}
      style={{
        fontSize: tooltip.style.textSize,
        padding: tooltip.style.padding,
        color: tooltip.style.textColor,
        backgroundColor: tooltip.style.backgroundColor,
        borderRadius: tooltip.style.cornerRadius,
        width: tooltip.style.tooltipWidth,
      }}
    >
      { tooltipImage  && (<img src={tooltip.image} alt="Tooltip Image" />)}
      {tooltip.text}
      <span
        className={`tooltip-arrow ${selectedButton}`}
        style={{
          width: tooltip.style.arrowWidth,
          height: tooltip.style.arrowHeight,
        }}
      ></span>
    </div>
  
)}
</>
<>
    <button id="bt3" className="tooltip-button3">
    Button 3
    </button>
    {selectedButton === 'button3' && (
      <div
      className={`tooltip ${selectedButton}`}
      style={{
        fontSize: tooltip.style.textSize,
        padding: tooltip.style.padding,
        color: tooltip.style.textColor,
        backgroundColor: tooltip.style.backgroundColor,
        borderRadius: tooltip.style.cornerRadius,
        width: tooltip.style.tooltipWidth,
      }}
    >
      { tooltipImage  && (<img src={tooltip.image} alt="Tooltip Image" />)}
      {tooltip.text}
      <span
        className={`tooltip-arrow ${selectedButton}`}
        style={{
          width: tooltip.style.arrowWidth,
          height: tooltip.style.arrowHeight,
        }}
      ></span>
    </div>
  
)}
</>
<>
    <button className="tooltip-button4">
    Button 4
    </button>
    {selectedButton === 'button4' && (
      <div
      className={`tooltip ${selectedButton}`}
      style={{
        fontSize: tooltip.style.textSize,
        padding: tooltip.style.padding,
        color: tooltip.style.textColor,
        backgroundColor: tooltip.style.backgroundColor,
        borderRadius: tooltip.style.cornerRadius,
        width: tooltip.style.tooltipWidth,
      }}
    >
      { tooltipImage  && (<img src={tooltip.image} alt="Tooltip Image" />)}
      {tooltip.text}
      <span
        className={`tooltip-arrow ${selectedButton}`}
        style={{
          width: tooltip.style.arrowWidth,
          height: tooltip.style.arrowHeight,
        }}
      ></span>
    </div>
  
)}
</>
<>
    <button className="tooltip-button5">
    Button 5
    </button>
    {selectedButton === 'button5' && (
      <div
      className={`tooltip ${selectedButton}`}
      style={{
        fontSize: tooltip.style.textSize,
        padding: tooltip.style.padding,
        color: tooltip.style.textColor,
        backgroundColor: tooltip.style.backgroundColor,
        borderRadius: tooltip.style.cornerRadius,
        width: tooltip.style.tooltipWidth,
      }}
    >
      { tooltipImage  && (<img src={tooltip.image} alt="Tooltip Image" />)}
      {tooltip.text}
      <span
        className={`tooltip-arrow ${selectedButton}`}
        style={{
          width: tooltip.style.arrowWidth,
          height: tooltip.style.arrowHeight,
        }}
      ></span>
    </div>
  
)}
</>
      </div>
    </div>
  );
};

export default App;
