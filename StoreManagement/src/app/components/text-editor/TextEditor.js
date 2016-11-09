import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import 'medium-editor/dist/css/medium-editor.min.css';
import 'medium-editor/dist/css/themes/flat.min.css';
var MediumEditor = require('medium-editor');

export default class TextEditor extends Component {
  render() {
    return (
      <div className="text-editor">      
        {this.props.text} 
      </div>
    );
  }  
  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);
    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', (e) => {
      this._updated = true;
      this.change(dom.innerHTML);
    });
  }
   change(text) {
    if (this.props.onChange) this.props.onChange(text, this.medium);
  }
}

TextEditor.defaultProps = {
  text: 'My brand new component!'
};

TextEditor.propTypes = {
  text: PropTypes.string
};
