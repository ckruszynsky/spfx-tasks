import { Button, DefaultPalette, mergeStyleSets, PrimaryButton, Stack, TextField } from 'office-ui-fabric-react';
import * as React from 'react';

export interface TaskFormProps {
  onAddTask?: any;
}

interface TaskFormState {
  title: string;
  description: string;
  complete: boolean;
}
export default class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  public state: TaskFormState = {
    title: "",
    description: "",
    complete: false
  };

  private _onTitleChange = (ev: React.FormEvent<HTMLInputElement>, newValue?: string) => {
    this.setState({ title: newValue || "" });
  };

  private _onDescriptionChange = (ev: React.FormEvent<HTMLInputElement>, newValue?: string) => {
    this.setState({ description: newValue || "" });
  };

  public render(): React.ReactElement<TaskFormProps> {
    const { onAddTask } = this.props;
    

    const styles = mergeStyleSets({
      panel: {
        background: DefaultPalette.neutralLight
      }
    });

    return (
      <Stack className={styles.panel} padding={30}>
        <Stack.Item>
          <TextField label="Title" placeholder="ex: My Task" 
                     value={this.state.title}
                     onChange={this._onTitleChange}
           />
        </Stack.Item>
        <Stack.Item>
          <TextField label="Description" placeholder="ex: Do something meaningful...." 
                     value={this.state.description}
                     onChange={this._onDescriptionChange} />
        </Stack.Item>
        <Stack.Item>
          <PrimaryButton disabled={false} text="Add Task" onClick={() => onAddTask(this.state)} />
          <Button disabled={false} text="Cancel" />
        </Stack.Item>
      </Stack>
    );
  }
}
