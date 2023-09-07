import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList/ContactList';
import initContacts from './base.json';

class App extends Component {
  state = {
    contacts: initContacts,
    filter: '',
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  setNewFilter = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  checkNewContat = newContact => {
    const res = this.state.contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      );
    if ( res ) {
      alert(`Contacts name "${newContact.name}" already exists`);
      return false;
    } else if (
      this.state.contacts.find(contact => contact.number === newContact.number)
    ) {
      alert(`Contacts number "${newContact.number}" already exists`);
      return false;
    }
    return true;
  };

  onSubmitData = newContact => {
    if (this.checkNewContat(newContact)) {
      this.setState({ contacts: [...this.state.contacts, newContact] });
      window.alert(
        `Contacts added: \n Name: ${newContact.name}\n Number: ${newContact.number}\n`
      );
    }
  };

  render() {
    return (
      <div className="appContainer">
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.onSubmitData} />
        <h2>Contacts</h2>
        <Filter setNewFilter={this.setNewFilter} />
        <ContactList
          contacts={this.findContacts()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
