import React from 'react';
import STORE from './STORE';

export default function Clap(props){
  return (
    <div>
    {props.type === 'clap' && 
      <div key="index" className="clap">
        <p>{STORE.participants.filter(element => element.id === props.participantId)[0].name} clapped</p>
      </div>}
    </div>
  );
}