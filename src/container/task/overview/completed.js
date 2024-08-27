import React from 'react';
import { TaskList } from '../../../components/tasklist/TaskList';
import { TaskListWrap } from '../style';

function Completed() {
  return (
    <TaskListWrap className="mb-30">
      <TaskList header="Ativos" description taskStatus="completed" taskLimit={10} />
    </TaskListWrap>
  );
}

export default Completed;
