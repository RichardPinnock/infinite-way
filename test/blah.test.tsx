import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  InfiniteLooper  from '../src/index';



describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InfiniteLooper  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
