import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'TaskWebPartWebPartStrings';

import TaskWebPart, { TaskWebPartProps } from './components/TaskWebPart';

export interface ITaskWebPartWebPartProps {
  title: string;
}

export default class TaskWebPartWebPart extends BaseClientSideWebPart<ITaskWebPartWebPartProps> {
  public render(): void {    
    const element: React.ReactElement<TaskWebPartProps> = React.createElement(TaskWebPart,{
      title: this.properties.title
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
                  label: strings.TitleFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
