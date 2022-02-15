import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/reducer";

function App() {
  // const [users, setUsers] = useState([]);

  const x = useSelector((state) => state || {});

  const data = x.users.data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h1 className="h1">User Details</h1>

      {/* {} */}

      <div className="cards-list">
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-content">
                <h5 className="h5">Name: {item.name}</h5>
                <p className="p">
                  <span className="s1">Username: </span>
                  <span className="s2">{item.username}</span>
                </p>
                <p className="p">
                  <span className="s1">Email:</span>{" "}
                  <span className="s2">{item.email}</span>
                </p>
                <p className="p">
                  <span className="s1">Phone:</span>{" "}
                  <span className="s2">{item.phone}</span>
                </p>
                <p className="p">
                  <span className="s1">Website:</span>{" "}
                  <span className="s2">{item.website}</span>
                </p>
                <p className="p">
                  <span className="s1">Company:</span>{" "}
                  <span className="s2">{item.company.name}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
