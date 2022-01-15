import axios from "axios";
import React, { useState, useEffect } from "react";
import TodoResult from "./TodoResult";

function TodoTable() {
  const [users, setUsers] = useState([]);
  const [sendUser, setSendUser] = useState({ data: "" });
  const [q, setQ] = useState("");

  const fetchData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?q=${q}`)
      .then((response) => {
        setUsers(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, [q]);

  const displayData = users.map((user) => (
    <tr>
      <td key={user.id}>{user.id}</td>
      <td key={user.title}>{user.title}</td>
      <td key={user.completed}>
        {user.completed === true ? "Complete" : "Incomplete"}
      </td>
      <td>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            setSendUser({ data: user.id });
          }}
        >
          View User
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-8">
                <h2>Todos</h2>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="search-input"
                  placeholder="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  style={{
                    borderRadius: "20px",
                    paddingLeft: "10px",
                    float: "right",
                    border: "1px solid #000",
                  }}
                />
              </div>
            </div>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ToDo ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{displayData}</tbody>
            </table>
          </div>
          <div className="col">
            <TodoResult data={sendUser.data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoTable;
