import React from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../Actions/ThemeActions';
import { RootState } from '../../store';
import Button from '../../Components/Button';
import ArdomentTextField from '../../Components/ArdomentTextField';
import { IconButton, InputAdornment } from '@mui/material';
import { Person, Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.StyledBody>
      <S.StyledLoginContainer>
        <S.StyledSwitchThemeMode onChange={() => dispatch(toggleTheme())} value={theme} />
        <S.StyledLoginTextInputContainer>
          <ArdomentTextField
            id="usuario"
            label="Usuário"
            type="text"
            startAdornment={
              <InputAdornment position="start">
                <IconButton edge="end" size="small">
                  <Person />
                </IconButton>
              </InputAdornment>
            }
          />
          <ArdomentTextField
            id="senha"
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="torna senha visivel" onClick={handleClickShowPassword} edge="end" size="small">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </S.StyledLoginTextInputContainer>
        <S.StyledLoginButtonsContainer>
          <Button variant="text" color="secondary" size="small">
            Esqueci a senha
          </Button>
          <Button onClick={() => navigate('/Home')}>Logar</Button>
        </S.StyledLoginButtonsContainer>
      </S.StyledLoginContainer>
    </S.StyledBody>
  );
};

export default Login;
