import React from 'react';
import './Participant.css'

export default function Participant(props) {
  return (
    <div className = "Participant">
      <img className= "user-avatar" src= {props.avatar} alt=""></img>
      <b>{props.name}</b>
      <br></br>
      {props.inSession ? <span className="dot in-session"></span> :  <span className="dot hidden"></span>}
      <span className="status">{props.onStage ? 'on stage' : 'in session'}</span>
    </div>
  )
}