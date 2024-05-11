import React from 'react';
import * as S from './styles';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <S.StyledBody>
      <S.StyledLoginContainer>
        Login
        <Button variant="contained" color="primary" onClick={() => navigate('/Home')}>
          Logar
        </Button>
      </S.StyledLoginContainer>
    </S.StyledBody>
  );
};

export default Login;
