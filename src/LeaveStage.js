import React from 'react';
import STORE from './STORE';

export default function LeaveStage(props){
  return (
    <div>
    {props.type === 'leave-stage' && 
      <div key="index" className="leave-stage">
        <p>{STORE.participants.filter(element => element.id === props.participantId)[0].name} left stage</p>
      </div>}
    </div>
  );
}