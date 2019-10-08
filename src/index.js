import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParticipantList from './ParticipantList';
import STORE from './STORE';
import Stage from './Stage';
import Chatlog from './Chatlog';



ReactDOM.render(<ParticipantList participants = {STORE.participants} />, document.getElementById('root'));

ReactDOM.render(<Stage participants = {STORE.participants} />, document.getElementById('stage'));

ReactDOM.render(<Chatlog participants = {STORE.participants} log = {STORE.chatEvents} />, document.getElementById('chatlog'));