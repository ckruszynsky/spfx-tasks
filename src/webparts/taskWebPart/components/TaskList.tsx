import * as React from 'react';

import Column from './Column';
import Row from './Row';

type TaskListProps = {};
export default class TaskList extends React.Component<TaskListProps, {}> {
  public render(): React.ReactElement<TaskListProps> {
    return (
      <Row>
        <Column size={12}>Task List</Column>
      </Row>
    );
  }
}
