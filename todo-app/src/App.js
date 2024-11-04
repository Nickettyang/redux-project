import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App = () => {
  return (
    <div className="container mt-5">
      <h1>ToDo Application</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;