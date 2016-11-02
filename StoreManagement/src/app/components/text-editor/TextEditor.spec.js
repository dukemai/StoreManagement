import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TextEditor from './textEditor';

describe('TextEditor component', () => {
  it('should render default text', () => {
    const textEditor = TestUtils.renderIntoDocument(<TextEditor/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(textEditor, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
