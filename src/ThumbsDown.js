import React from 'react';
import STORE from './STORE';

export default function ThumbsDown(props){
  return (
    <div>
    {props.type === 'thumbs-down' && 
      <div key="index" className="thumbs-down">
        <p>{STORE.participants.filter(element => element.id === props.participantId)[0].name} gave a thumbs down</p>
      </div>}
    </div>
  );
}