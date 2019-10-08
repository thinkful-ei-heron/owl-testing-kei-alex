import React from 'react';
import './Participant.css'

export default function Participant(props) {
  return (
    <div className = "Participant" key = {props.id}>
      <img className= "user-avatar" src= {props.avatar} alt=""></img>
      <h6 className="user-name">{props.name}</h6>
      {props.inSession ? <span className="dot in-session"><div>{props.onStage ? 'on stage' : 'in session'}</div></span> :  <span className="dot hidden"><div>left session</div></span>}
    </div>
  )
}