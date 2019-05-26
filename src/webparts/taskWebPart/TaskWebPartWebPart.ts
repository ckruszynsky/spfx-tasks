import {Version} from '@microsoft/sp-core-library';
import {IPropertyPaneConfiguration, PropertyPaneTextField} from '@microsoft/sp-property-pane';
import {BaseClientSideWebPart} from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'TaskWebPartWebPartStrings';

import TaskWebPart from './components/TaskWebPart';

export interface ITaskWebPartWebPartProps {
  description: string;
}

type TaskWebPartProps = TaskWebPart['props'];

export default class TaskWebPartWebPart extends BaseClientSideWebPart<ITaskWebPartWebPartProps> {
  public render(): void {
    const element: React.ReactElement<TaskWebPartProps> = React.createElement(TaskWebPart, {
      description: this.properties.description
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
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
