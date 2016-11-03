import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TextEditor from '../components/text-editor/TextEditor';

import * as TodoActions from '../actions/index';

class Compose extends Component {
  render() {   
    return (
      <div>
        <TextEditor />
      </div>
    );
  }
}

Compose.propTypes = {
 
};

function mapStateToProps(state) {
  return {
   
  };
}

function mapDispatchToProps(dispatch) {
  return {
  
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compose);
