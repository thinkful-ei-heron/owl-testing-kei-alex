import React from 'react';
import STORE from './STORE';

export default function JoinStage(props){
  return (
    <div>
    {props.type === 'join-stage' && 
      <div key="index" className="join-stage">
        <p>{STORE.participants.filter(element => element.id === props.participantId)[0].name} joined the stage</p>
      </div>}
    </div>
  );
}