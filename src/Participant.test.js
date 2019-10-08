import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './STORE';
import Participant from './Participant';
import renderer from 'react-test-renderer';

describe('Participant tests', () => {
  //smoke test
  it('render with prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant
      id = {STORE.participants[0].id}
      name = {STORE.participants[0].name}
      avatar = {STORE.participants[0].avatar}
      inSession = {STORE.participants[0].inSession}
      onStage = {STORE.participants[0].onStage}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Participant
        id = {STORE.participants[0].id}
        name = {STORE.participants[0].name}
        avatar = {STORE.participants[0].avatar}
        inSession = {STORE.participants[0].inSession}
        onStage = {STORE.participants[0].onStage}
      />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })
});