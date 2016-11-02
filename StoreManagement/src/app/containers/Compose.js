import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TextEditor from '../components/text-editor/TextEditor';

import * as TodoActions from '../actions/index';

class Compose extends Component {
  render() {
    const {todos, actions} = this.props;
    return (
      <div>
        <TextEditor />
      </div>
    );
  }
}

Compose.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compose);
