import React from 'react';

export default function StageNames(props) {
  return (
    <div>
      {props.participants.map((element,index) => 
      <div key={index}>
        <span>{element.name}</span>
        <div className="volume-bar">VOLUME BAR</div>
        <img src="" alt="mini speaker" />
        <img src="" alt="mini magnifying glass" />
      </div>
      )}
     </div>
  )
}