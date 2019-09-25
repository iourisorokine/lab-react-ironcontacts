import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactCard from "./ContactCard";

const firstContacts = contacts.slice(0, 5);

class App extends Component {
  state = {
    appContacts: firstContacts
  };

  addRandomContact = () => {
    const randomIndex = Math.ceil(Math.random() * (contacts.length - 5)) + 4;
    const newContacts = [...this.state.appContacts]; //.concat([contacts[randomIndex]]);
    newContacts.push(contacts[randomIndex]);
    this.setState({
      appContacts: newContacts
    });
  };
  
  deleteContact=name=>{
    const newContacts = [...this.state.appContacts].filter(el=>{
      return el.name !==name
    });
    this.setState({
      appContacts: newContacts
    });
  }


  sortByName = () => {
    const newContacts = [...this.state.appContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      appContacts: newContacts
    });
  };

  sortByPopularity = () => {
    const newContacts = [...this.state.appContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      appContacts: newContacts
    });
  };

  render() {

    const renderContacts = this.state.appContacts.map(contact => {
      return <ContactCard contact={contact} deleteContact={()=>this.deleteContact(contact.name)}/>;
    });
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="buttons-set">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        </div>
        <div className="headings">
          <h2>Picture</h2>
          <h2>Name</h2>
          <h2>Popularity</h2>
        </div>
        {renderContacts}
      </div>
    );
  }
}

export default App;
