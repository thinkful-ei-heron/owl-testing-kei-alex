import React from 'react';
import StageNames from './StageNames';
import StageAvatar from './StageAvatar';
import StageUser from './StageUser';

export default function Stage(props) {
  let onStage = props.participants.filter(element => element.onStage === true);
  const user = props.participants.filter(element => element.user);
  const nonUsers = onStage.filter(element => !element.user);
  return(
    <div>
      <div>
        <StageNames participants = {nonUsers}/>
      </div>
      <div>
        <StageAvatar participants = {nonUsers} />
      </div>
        {(user.length !== 0 ) ? <div><StageUser user = {user[0]} /></div> : <div></div>}
    </div>
  )
}
