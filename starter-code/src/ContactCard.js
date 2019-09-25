import React from "react";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact-card">
        <img src={this.props.contact.pictureUrl} width="100px" alt="" />
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.popularity.toFixed(2)}</p>
        <button onClick={this.props.deleteContact}>Delete Contact</button>
      </div>
    );
  }
}

export default ContactCard;
