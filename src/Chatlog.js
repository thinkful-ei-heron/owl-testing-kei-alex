import React from 'react';
import Message from './Message';
import RaiseHand from './RaiseHand';
import ThumbsUp from './ThumbsUp';
import ThumbsDown from './ThumbsDown';
import Clap from './Clap';
import Join from './Join';
import Leave from './Leave';
import JoinStage from './Join';
import LeaveStage from './Leave';

function Chatlog(props) {
  console.log(props.log);
  return (
    <div className="chatlog">
      {props.log.map((element, index) =>
        <div>
          <Message type = {element.type} message={element.message} participantId={element.participantId}/>
          <RaiseHand type = {element.type} message={element.message} participantId={element.participantId}/>
          <ThumbsUp type = {element.type} message={element.message} participantId={element.participantId}/>
          <ThumbsDown type = {element.type} message={element.message} participantId={element.participantId}/>
          <Clap type = {element.type} message={element.message} participantId={element.participantId}/>
          <Join type = {element.type} message={element.message} participantId={element.participantId}/>
          <Leave type = {element.type} message={element.message} participantId={element.participantId}/>
          <JoinStage type = {element.type} message={element.message} participantId={element.participantId}/>
          <LeaveStage type = {element.type} message={element.message} participantId={element.participantId}/>
        </div>
      )}
    </div>
  )
}

export default Chatlog;