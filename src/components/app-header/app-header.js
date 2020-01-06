import React from 'react';

import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo app</h1>
      <h2>{toDo} tasks to do, {done} done</h2>
    </div>
  );
};


export default AppHeader;