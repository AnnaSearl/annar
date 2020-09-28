import * as React from 'react';

export const FormContext = React.createContext({
  values: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: (event: any, name: string) => {
    /* */
  },
});
