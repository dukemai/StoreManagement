import React, { Component, PropTypes } from 'react';
require("./../../content/sass/main.scss");
require("./../../content/sass/materialize.scss");
class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout card-panel teal lighten-2">
        <div className="chip">
          Tag
    <i className="close material-icons">close</i>
        </div>
        {this.props.children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};
export { MainLayout };

