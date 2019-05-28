import * as React from 'react';

type HeaderProps = {  
  title:string
};


export class Header extends React.Component < HeaderProps, {} > {
  public render(): React.ReactElement < HeaderProps > {
    const { title} = this.props;
    return(
      <div className="ms-Grid-row">      
        <div className="ms-Grid-col ms-lg12">
            <h1>{title}</h1>
        </div>
      </div>
    );
  }
}

export default Header;