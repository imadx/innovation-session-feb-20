import React from 'react';
import Modal from './Modal';

import logo from '../../img/logo.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    // Show a Modal on click.
    const modal = this.state.showModal ? (
      <Modal>
        <div className='modal'>
          <div>
            <p>
              With a portal, we can render content into a different part of the
              DOM, as if it were any other React child.
            </p>
            <p>
              This is being rendered inside the #modal-container-portal div.
            </p>
            <button onClick={this.handleHide}>Hide modal</button>
          </div>
        </div>
      </Modal>
    ) : null;

    return (
      <div className='App'>
        <div className='content'>
          <hgroup>
            <h1>Portal Demo</h1>
            <h3>Hint: Click on Show Modal button to Show the Modal rendered through a ReactDOM.createPortal()</h3>
          </hgroup>

          <button onClick={this.handleShow}>Show modal</button>
          {modal}
        </div>
        <div className='footer'>
          <img src={logo} alt='' />
        </div>
      </div>
    );
  }
}

export default App;
