import React from 'react';

export default function StageAvatar(props) {
  console.log(props);
  return (<div> {props.participants.map((element, index) => <img key={index} src={element.avatar} alt="large-avatar"/>)} </div>)
}