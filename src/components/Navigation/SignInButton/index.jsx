import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const SignInButton = () => {
  const history = useHistory();

  const handleSignIn = () => {
    history.push('/login');
  };

  return (
    <Button
      type='button'
      color='inherit'
      onClick={handleSignIn}
    >Sign In</Button>
  );
};

export default SignInButton;
