import * as React from 'react';

import Column from './Column';
import Row from './Row';

type HeaderProps = {  
  title:string
};


export class Header extends React.Component < HeaderProps, {} > {
  public render(): React.ReactElement < HeaderProps > {
    const { title} = this.props;
    return(
        <Row>
         <Column size={12}>
            <h1>{title}</h1>
          </Column>        
       </Row>        
    );
  }
}

export default Header;