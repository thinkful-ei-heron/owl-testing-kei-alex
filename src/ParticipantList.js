import React from 'react';
import Participant from './Participant';
import './ParticipantList.css';

export default function ParticipantList (props) {
  let participantsSort = props.participants;
  
  participantsSort.sort(function(a, b) {
    let textA=a.name;
    let textB=b.name;
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
  let absent=participantsSort.filter(element => element.inSession===false);
  let inSession=participantsSort.filter(element => element.inSession===true && element.onStage===false);
  let onStage=participantsSort.filter(element => element.inSession===true && element.onStage===true);
  return (
  <ul className='participant-list'>
    {onStage.map((element, index) => 
    <li key={index} className='user-tab'><Participant 
      avatar={element.avatar}
      name={element.name}
      inSession={element.inSession}
      onStage={element.onStage}
    /></li>)}
    {inSession.map((element, index) => 
    <li key={index} className='user-tab'><Participant 
      avatar={element.avatar}
      name={element.name}
      inSession={element.inSession}
      onStage={element.onStage}
    /></li>)}
    {absent.map((element, index) => 
    <li key={index} className='user-tab'><Participant 
      avatar={element.avatar}
      name={element.name}
      inSession={element.inSession}
      onStage={element.onStage}
    /></li>)}
  </ul>
  )
}