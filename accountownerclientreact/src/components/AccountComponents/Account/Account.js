import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Moment from "react-moment";
import { Button } from "react-bootstrap";

const redirectToAccountDetails = (id, history) => {
  history.push("/accountDetails" + id);
};

const redirectToUpdateAccount = (id, history) => {
  history.push("/updateAccount" + id);
};

const rediterctToDeleteAccount = (id, history) => {
  history.push("/deleteAccount" + id);
};

const Account = props => {
  return (
    <Aux>
      <tr>
        <td>
          <Moment format="DD/MM/YYYY">{props.account.dateOfCreation}</Moment>
        </td>
        <td>{props.account.accountType}</td>
        <td>{props.account.ownerId}</td>
        <td>
          <Button
            onClick={() =>
              redirectToAccountDetails(props.account.id, props.history)
            }
          >
            Details
          </Button>
        </td>
        <td>
          <Button
            bsStyle="success"
            onClick={() =>
              redirectToUpdateAccount(props.account.id, props.history)
            }
          >
            Update
          </Button>
        </td>
        <td>
          <Button
            bsStyle="danger"
            onClick={() =>
              rediterctToDeleteAccount(props.account.id, props.history)
            }
          >
            Delete
          </Button>
        </td>
      </tr>
    </Aux>
  );
};

export default Account;
