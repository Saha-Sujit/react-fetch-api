import axios from "axios";
import React, { useEffect, useState } from "react";

function TodoResult(props) {
  console.log(props.data);
  const [userDetails, setUserDetails] = useState([]);

  const fetchDetails = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/todos/${
          props.data ? props.data : 1
        }`
      )
      .then((response) => {
        setUserDetails(response.data);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, [props.data]);

  return (
    <>
      <h2>User Details</h2>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td>ToDo ID</td>
            <td>{userDetails.userId}</td>
          </tr>
          <tr>
            <td>ToDo Title</td>
            <td>{userDetails.title}</td>
          </tr>
          <tr>
            <td>User ID</td>
            <td>{userDetails.id}</td>
          </tr>
          <tr>
            <td>ToDo ID</td>
            <td>
              {userDetails.completed === true ? "Complete" : "Incomplete"}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TodoResult;
