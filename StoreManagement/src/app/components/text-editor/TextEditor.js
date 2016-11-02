import React, {PropTypes, Component} from 'react';

export default class TextEditor extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

TextEditor.defaultProps = {
  text: 'My brand new component!'
};

TextEditor.propTypes = {
  text: PropTypes.string
};
