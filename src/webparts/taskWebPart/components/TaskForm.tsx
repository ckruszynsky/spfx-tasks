import * as React from 'react';

import Column from './Column';
import Row from './Row';

type TaskFormProps = {};
export default class TaskForm extends React.Component<TaskFormProps, {}> {
  public render(): React.ReactElement<TaskFormProps> {
    return (
      <Row>
        <Column size={12}>Task form</Column>
      </Row>
    );
  }
}
