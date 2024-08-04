import {
  authSlice,
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from '../../../src/store/auth/authSlice';
import { authenticatedState, initialState } from '../../fixtures/authStates';
import { testUserCredentials } from '../../fixtures/testUser';

describe('Pruebas en authSlice', () => {
  test('Debe de regresar el estado inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('debe de realizar un login', () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));

    expect(state).toEqual({
      status: 'authenticated',
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  test('debe de realizar el logout', () => {
    const state = authSlice.reducer(authenticatedState, onLogout());

    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined,
    });
  });

  test('debe de realizar el logout con mensaje', () => {
    const errorMessage = 'Credenciales no validas';
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));

    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: errorMessage,
    });
  });

  test('debe de limpiar el errorMessage', () => {
    const errorMessage = 'Credenciales no validas';
    let state = authSlice.reducer(authenticatedState, onLogout(errorMessage));

    state = authSlice.reducer(state, clearErrorMessage());

    expect(state.errorMessage).toBe(undefined);
  });

  test('debe de tener el estado en checking', () => {
    const state = authSlice.reducer(authenticatedState, onChecking());

    expect(state).toEqual(initialState);
  });
});
