import React from 'react';
import STORE from './STORE';

export default function Leave(props){
  return (
    <div>
    {props.type === 'leave' && 
      <div key="index" className="leave">
        <p>{STORE.participants.filter(element => element.id === props.participantId)[0].name} left</p>
      </div>}
    </div>
  );
}