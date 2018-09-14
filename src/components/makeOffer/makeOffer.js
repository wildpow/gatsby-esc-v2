import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MakeOfferContainer, MakeOfferButton, MakeOfferSpan } from './offerStyles/makeOfferStyles';
import { ModalContainer, CardContainer, Card } from './offerStyles/modalStyles';
import { Front, Header } from './offerStyles/frontCardStyles';
import { Form, Input, TextArea, SubmitButton } from './offerStyles/formStyles';
import { Back } from './offerStyles/backCardStyles';
import Logo from '../../images/ezgif.com-optimize.gif';

let modalRoot 
let mainRoot
if(typeof document !== "undefined") {
  modalRoot = document.getElementById('modal-root');
  mainRoot = document.getElementById('___gatsby');
} else {
  modalRoot = ''
  mainRoot = ''
}

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div'); //holder for the portal
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
    .join("&")
} 

class MakeOffer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      name: "",
      email: "",
      note: "",
      tel: "",
      mattress: this.props.mattress,
      size: this.props.size,
      formSubmit: false,
      opacity: 1,                       
      flipCard: "", 
      pointerEvents: 'auto'                     
    }
    this.handleShow = this.handleShow.bind(this); 
    this.handleHide = this.handleHide.bind(this); 
    this.handleFlip = this.handleFlip.bind(this)  
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  
  handleSubmit = e => {
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded"},
      body: encode({ "form-name": "makeOffer", ...this.state })
    })
      .then(() => this.setState({ 
                    formSubmit: !this.state.formSubmit, 
                    disabled: !this.state.disabled,
                    opacity: .3,
                    pointerEvents: 'none'}))
      .then(() => this.handleFlip())
      .catch(error => alert(error));
    
    e.preventDefault();
  };

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ 
      showModal: false,
      name: "",
      email: "",
      note: "",
      });
    
  }
  handleFlip() {
    this.setState({ flipCard: 'rotateY(180deg)'})
  }

  render() {
    const { name, email, tel, note, mattress, size } = this.state;
    const modal = this.state.showModal ? (
      <Modal size={this.props.size}> 
        <ModalContainer>
          <CardContainer>
            <Card style={{transform: this.state.flipCard, WebkitTransform: this.state.flipCard}}>
              <Front>
                <Header>
                  <h3>Make an Offer</h3>
                  <button onClick={this.handleHide}>close</button>
                </Header>
                <p>
                  We now are making it even easier to comparison shop with our locally owned and operated mattress center.
                  If you find a lower price on the same mattress from a competitor, just let us know by filling out this form
                  and we will help you "sleep like the experts do".
                </p>
                <Form onSubmit={this.handleSubmit}>
                  <Input
                    required
                    placeholder="Name"
                    type="text" 
                    name="name" 
                    autoComplete="name"
                    value={name} 
                    onChange={this.handleChange} 
                  />
                    <Input
                    required
                    placeholder="Email"
                    type="email" 
                    name="email" 
                    autoComplete="email" 
                    value={email} 
                    onChange={this.handleChange} 
                  />
                    <Input
                      required
                      autoComplete="tel-national"
                      placeholder="###-###-####"
                      pattern="^[0-9-+s()]*$"
                      type="tel" 
                      name="tel"
                      value={tel} 
                      onChange={this.handleChange} 
                    />
                  <TextArea
                    onChange={this.handleChange}
                    placeholder="Price match info"
                    required
                    type="text"
                    value={note} 
                    name="note"
                  />
                <input hidden type="text" name="mattress" defaultValue={mattress}/>
                <input hidden type="text" name="size" defaultValue={size} />
                <SubmitButton type="submit">Send</SubmitButton>
              </Form>
              </Front>
              <Back onClick={this.handleHide}>
                <Header>
                  <h3>Form submitted</h3>
                  <button onClick={this.handleHide}>close</button>
                </Header>
                <p>
                  Thank you for reaching out to us and giving us
                  the opportunity to earn your business.
                  We will get back to you with in 24 hours and hopefully
                  help you "sleep like the experts do".
                </p>
                <img src={Logo} alt="bla bla"/>
                
              </Back>
            </Card>
          </CardContainer>
        </ModalContainer>
      </Modal>
    ) : null;
    return (
      <MakeOfferContainer style={{opacity: this.state.opacity}}>        
        <MakeOfferButton 
          onClick={this.handleShow}
          style={{  opacity: this.props.opacity, 
                    transition: 'opacity 700ms ease-in-out',
                    pointerEvents: this.state.pointerEvents }}
          disabled={this.props.disabled}
          >Make <MakeOfferSpan>an</MakeOfferSpan> Offer
        </MakeOfferButton>
        {modal}
      </MakeOfferContainer>
    )
  }
}

export default MakeOffer;