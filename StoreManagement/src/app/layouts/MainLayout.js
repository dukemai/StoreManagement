import React,{ Component, PropTypes} from 'react';

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
          {this.props.children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};
export {MainLayout};

