import * as React from 'react';

type TaskListProps = {

}
export default class TaskList extends React.Component<TaskListProps,{}> {
     public render():React.ReactElement<TaskListProps>{
         return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg12">
                    Task List
                </div>
            </div>
         )
     }
}