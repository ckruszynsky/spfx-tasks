import * as React from 'react';

type TaskFormProps = {

}
export default class TaskForm extends React.Component<TaskFormProps,{}> {
     public render():React.ReactElement<TaskFormProps>{
         return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg12">
                    Task form
                </div>
            </div>
         )
     }
}