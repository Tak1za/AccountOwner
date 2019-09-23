import React, { Component } from "react";
import "./OwnerList.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import { Link } from "react-router-dom";
import { Button, Row, Col, Table } from "react-bootstrap";
import { connect } from "react-redux";
import * as repositoryActions from "../../../store/actions/repositoryActions";
import Owner from "../../../components/OwnerComponents/Owner/Owner";

class OwnerList extends Component {
  componentDidMount = () => {
    let url = "/api/owner";
    this.props.onGetData(url, { ...this.props });
  };

  render() {
    let owners = [];
    if (this.props.data && this.props.data.length > 0) {
      owners = this.props.data.map(owner => {
        return <Owner key={owner.id} owner={owner} {...this.props} />;
      });
    }

    var redirectToCreateAccount = history => {
      history.push("/createAccount");
    };

    return (
      <Aux>
        <Row>
          <Col mdoffset={10} md={2}>
            <Button
              onClick={() =>
                redirectToCreateAccount(this.props.history)
              }
            >
              Create Owner
            </Button>
            <Link to="/createOwner">Create Owner</Link>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12}>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Address</th>
                  <th>Details</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>{owners}</tbody>
            </Table>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetData: (url, props) => dispatch(repositoryActions.getData(url, props))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnerList);
