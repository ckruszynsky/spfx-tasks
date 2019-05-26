import * as React from 'react';

type HeaderProps = {
  logoUrl: '',
  title: ''
};
export class Header extends React.Component < HeaderProps, {} > {
  public render(): React.ReactElement < HeaderProps > {
    return(
      <div>Header</div>
    );
  }
}

export default Header;