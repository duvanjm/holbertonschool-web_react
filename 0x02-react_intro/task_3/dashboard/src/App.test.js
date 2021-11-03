/* eslint-disable jest/valid-expect */
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

const wrapper = shallow(<App />);

describe('<App />', () => {
  it('render App component', () => {
    shallow(<App />);
    expect(wrapper.exists());
  });
  it('renders App-header', () => {
    expect(wrapper.contains(<header className="App-header" />));
  });
  it('renders App-body, App-footer', () => {
    expect(wrapper.contains(<body className='App-body' />));
  });
  it('renders App-footer', () => {
    expect(wrapper.contains(<footer className='App-footer' />));
  });
});
