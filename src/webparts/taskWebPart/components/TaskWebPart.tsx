import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer } from 'office-ui-fabric-react';
import * as React from 'react';

import Header from './Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export interface TaskWebPartProps{
  title:string;
};

export default class TaskWebPart extends React.Component < TaskWebPartProps, {} > {
  public render(): React.ReactElement < TaskWebPartProps > {
    const {title} = this.props;
    return(
      <Customizer {...FluentCustomizations}>
        <div className="ms-Grid">
           <Header title={title}></Header>
           <TaskForm></TaskForm>
           <TaskList></TaskList>
        </div>
      </Customizer>
    );
  }
}
