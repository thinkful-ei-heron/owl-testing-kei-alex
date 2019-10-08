import React from 'react';
import STORE from './STORE';

export default function ThumbsUp(props){
  return (
    <div>
    {props.type === 'thumbs-up' && 
      <div key="index" className="thumbs-up">
        <p>{STORE.participants.filter(element => element.id === props.participantId)[0].name} gave a thumbs up</p>
      </div>}
    </div>
  );
}