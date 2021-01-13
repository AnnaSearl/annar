import * as React from 'react';

export const HOOK_KEY = 'ANNA_FORM_INTERNAL_HOOKS';

export const FormContext = React.createContext({
  formInstance: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: (event: any, name: string) => {
    /* */
  },
});
