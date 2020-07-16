import React from "react";
import { connect } from "react-redux";

class Total extends React.Component {
  render() {
    console.log(Total)
    return <div>Total {this.props.total}</div>;
  }
}
const mapStateToProps = ({ calculate }) => {
  return {
    total: calculate.total,
  };
};
export default connect(mapStateToProps)(Total);
