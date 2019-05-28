import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'TaskWebPartWebPartStrings';

import TaskWebPart, { TaskWebPartProps } from './components/TaskWebPart';
import { Task } from './models/Task';

export interface ITaskWebPartWebPartProps {
  title: string;
}

let tasks:Array<Task> = [
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
]


export default class TaskWebPartWebPart extends BaseClientSideWebPart<ITaskWebPartWebPartProps> {
  public render(): void {    
    const element: React.ReactElement<TaskWebPartProps> = React.createElement(TaskWebPart,{
      title: this.properties.title,
      tasks: tasks
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneTitle
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.TitleFieldLabel,
                  value: 'SPFx Tasks'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
