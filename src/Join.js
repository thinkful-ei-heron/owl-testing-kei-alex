import React from 'react';
import STORE from './STORE';

export default function Join(props){
  return (
    <div>
    {props.type === 'join' && 
      <div key="index" className="join">
        <p>{STORE.participants.filter(element => element.id === props.participantId)[0].name} joined</p>
      </div>}
    </div>
  );
}