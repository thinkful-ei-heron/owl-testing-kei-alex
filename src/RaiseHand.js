import React from 'react';
import STORE from './STORE';

export default function RaiseHand(props){
  return (
    <div>
    {props.type === 'raise-hand' && 
      <div key="index" className="raise-hand">
        <p>{STORE.participants.filter(element => element.id === props.participantId)[0].name} raised their hand</p>
      </div>}
    </div>
  );
}