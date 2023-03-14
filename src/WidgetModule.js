import MobileWidget from './components/MobileWidget';

window.myWidget = {
  render: (containerId) => {
    const container = document.getElementById(containerId);
    ReactDOM.render( <MobileWidget /> , container);
  },
};

 