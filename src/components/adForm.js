import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormWrapper, Form, Label,
          Button, Input, ModalBox,
          ModalContainer, ModalButton, LabelWrapper } from '../styles/landingStyles';
//modal div
let modalRoot
let mainRoot
if(typeof document !== "undefined") {
  modalRoot = document.getElementById('modal-root');
  mainRoot = document.getElementById('___gatsby');
} else {
  modalRoot = "";
  mainRoot = "";
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
    document.body.style.overflow = "hidden";  //make backgroup not scrollable
    mainRoot.style.position = 'fixed';
    mainRoot.style.filter = 'blur(5px) grayscale(50%)';
    mainRoot.style.width = '100%';
    mainRoot.style.height = '100%';
    mainRoot.style.transition = '.35s';
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    document.body.style.overflow = "visible";
    mainRoot.style.position = 'static';
    mainRoot.style.filter = 'blur(0px) grayscale(0%)';
    mainRoot.style.width = 'auto';
    mainRoot.style.height = 'auto';
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children, this.el,
    );
  }
}
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class AdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      tel: "",
      showModal: false,
      disabled: false,
      opacity: 1,
      pointerEvents: 'auto'
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true, pointerEvents: 'none' });
  }

  handleHide() {
    this.setState({
      showModal: false,
      disabled: !this.state.disabled,
      name: "",
      email: "",
      tel: "",
      opacity: .3
    });
  }

  handleSubmit = e => {
    // console.log('from submit',e)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
    .then(() => this.handleShow())
    .catch(error => alert(error));
    e.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() { 
    const { name, email, tel } = this.state;
    const modal = this.state.showModal ? (
    <Modal>
      <ModalContainer onClick={this.handleHide}>
        <ModalBox>
          <h3>Thank You!</h3>
          <p>We will get in touch with you <br/>within 24 hours</p>
          <ModalButton onClick={this.handleHide}>Close</ModalButton>
        </ModalBox>
      </ModalContainer>
    </Modal>
    ) : null;
    return ( 
      <FormWrapper style={{opacity: this.state.opacity}}>
        <Form
          name="contact"
          method="post"
          // action={this.handleShow}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
        <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <LabelWrapper TopM>
            <Label>Name:</Label>
              <Input
                required
                placeholder="Mr. Sleeping Panda"
                type="text" 
                name="name" 
                autoComplete="name"
                //TODO:
              // I would like to have this field autoFocus but clicking on the map pin makes it fire 
              disabled={this.state.disabled}
              value={name} 
              onChange={this.handleChange} 
            />
          </LabelWrapper>
          <LabelWrapper>
            {/* {console.log(this.state)} */}
            <Label>Email:</Label>
              <Input
                required
                placeholder="youremail@example.com"
                type="email" 
                name="email" 
                autoComplete="email"
                disabled={this.state.disabled}
                value={email} 
                onChange={this.handleChange} 
              />
            </LabelWrapper>
          <LabelWrapper>
            <Label>Phone:</Label>
              <Input
                required
                autoComplete="tel-national"
                placeholder="###-###-####"
                pattern="^[0-9-+s()]*$"
                type="tel" 
                name="tel"
                disabled={this.state.disabled}
                value={tel} 
                onChange={this.handleChange} 
              />
            </LabelWrapper>  
          <Button 
            type="submit"
            disabled={this.state.disabled}
            style={{pointerEvents: this.state.pointerEvents}}
          >
          Send
          </Button>
          {modal}
        </Form>
      </FormWrapper>
    )
  }
}

export default AdForm;