import React, { Component } from "react";
import "./AccountList.css";
import * as repositoryActions from "../../../store/actions/repositoryActions";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import { Row, Col, Table } from "react-bootstrap";
import { connect } from "react-redux";
import Account from "../../../components/AccountComponents/Account/Account";

class AccountList extends Component {
  componentDidMount() {
    let url = "/api/account";
    this.props.onGetData(url, { ...this.props });
  }

  render() {
    let accounts = [];
    if (this.props.data && this.props.data.length > 0) {
      accounts = this.props.data.map(account => {
        return <Account key={account.id} account={account} {...this.props} />;
      });
    }
    return (
      <Aux>
        <Row>
          <Col md={12}>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>Date of Creation</th>
                  <th>Account Type</th>
                  <th>Owner ID</th>
                  <th>Details</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>{accounts}</tbody>
            </Table>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapDispatchToPros = dispatch => {
  return {
    onGetData: (url, props) => dispatch(repositoryActions.getData(url, props))
  };
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(AccountList);
