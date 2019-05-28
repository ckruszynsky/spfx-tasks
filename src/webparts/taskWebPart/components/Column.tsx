import * as React from 'react';

export interface IColumnProps {   
   size:number
}

const Column: React.SFC<IColumnProps> = ({size,children}) => {
    let classes = 'ms-Grid-col';
    classes += size ? ` ms-sm${size}` : '';    
   return (
      <div className={classes}>
          {children}
      </div>
   )
}

export default Column;