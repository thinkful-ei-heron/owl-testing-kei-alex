import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './STORE';
import ParticipantList from './ParticipantList';
import renderer from 'react-test-renderer';

describe('ParticipantList tests', () => {
  //smoke test
  it('render with prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList
      participants = {STORE.participants}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ParticipantList
        participants = {STORE.participants}
      />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })
});