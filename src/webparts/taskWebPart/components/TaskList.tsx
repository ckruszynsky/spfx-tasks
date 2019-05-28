import * as React from 'react';

import { Task } from '../models/Task';
import Column from './Column';
import Row from './Row';

interface TaskListProps {
    tasks:Array<Task>
};

export default class TaskList extends React.Component<TaskListProps, {}> {
  public render(): React.ReactElement<TaskListProps> {
     const {tasks} = this.props;
   
     let items = tasks.map(t=> <li>{t.title}</li>);

    return (
      <Row>
        <Column size={12}>
            <ul>
                {items}
            </ul>
        </Column>
      </Row>
    );
  }
}
