import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer } from 'office-ui-fabric-react';
import * as React from 'react';

import { Task } from '../models/Task';
import Header from './Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export interface TaskWebPartProps{
  title:string;  
};

interface TaskWebPartState {
  tasks:Array<Task>
}

const tasks:Array<Task> = [
  {
    id: 1,
    title:'Test',
    description:'This is test task',    
    complete:false
  },
  {
    id: 2, 
    title: 'Test # 2',
    description: 'Another test task',    
    complete:false
  }
];
export default class TaskWebPart extends React.Component < TaskWebPartProps,TaskWebPartState > {
  public state:TaskWebPartState  = {
    tasks : tasks
  };

  onAddTask = (task) => {
     this.setState({tasks:[...this.state.tasks,task]});
  }
  public render(): React.ReactElement < TaskWebPartProps > {
    const {title} = this.props;
    return(
      <Customizer {...FluentCustomizations}>
        <div className="ms-Grid">
           <Header title={title}></Header>
           <TaskForm onAddTask={this.onAddTask}></TaskForm>
           <TaskList tasks={this.state.tasks}></TaskList>
        </div>
      </Customizer>
    );
  }
}
