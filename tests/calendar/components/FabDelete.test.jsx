import { FabDelete } from '../../../src/calendar/components/FabDelete';
import { Provider } from 'react-redux';
import { store } from '../../../src/store';
import { render } from '@testing-library/react';

describe('Pruebas en <FabDelete/>', () => {
  test('Debe de mostrar el componente correctamente', () => {
    render(
      <Provider store={store}>
        <FabDelete />
      </Provider>
    );
  });
});
