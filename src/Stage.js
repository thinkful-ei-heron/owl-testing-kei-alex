import React from 'react';
import STORE from './STORE';
// import StageNames from './StageNames';
// import StageAvatar from './StageAvatar';
import StageUser from './StageUser';

export default function Stage(props) {
let onStage = props.participants.filter(element => element.onStage === true);
return(
  <div>
    {/* <div>
      <StageNames participants = {onStage}/>
    </div> */}
    {/* <div>
      <StageAvatar participants = {onStage}/>
    </div> */}
    <div>
      <StageUser participants = {onStage}/>
    </div>
  </div>
)
}
