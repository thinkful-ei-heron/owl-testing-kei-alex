import React from 'react';
import STORE from './STORE';

export default function Message(props){
  return (
    <div>
    {props.type === 'message' && 
      <div key="index" className="message">
        <img src={STORE.participants.filter(element => element.id === props.participantId)[0].avatar} alt=""></img>
        <p>{STORE.participants.filter(element => element.id === props.participantId)[0].name}</p>
        <p>{props.message}</p>
      </div>}
    </div>
  );
}