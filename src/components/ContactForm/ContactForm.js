import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  stateChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getSubmitData = e => {
    e.preventDefault();
    if (!this.state.name.trim() || !this.state.number.trim()) {
      window.alert('Please complete all fields');
      return;
    }
    this.props.onSubmitData({ ...{ id: nanoid() }, ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.getSubmitData}>
        <label className={css.label}>
          <span className={css.labelText}>Name</span>
          <input
            className={css.input}
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.stateChange}
            pattern="[A-Za-zА-Яа-яЁё]{2,}[ ][A-Za-zА-Яа-яЁё]{2,}"
            placeholder="Name Surname (min 2 symbols for each)"
          />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Number</span>
          <input
            className={css.input}
            name="number"
            type="text"
            value={this.state.number}
            onChange={this.stateChange}
            pattern="\d{3}[\-]\d{2}[\-]\d{2}"
            placeholder="111-11-11"
          />
        </label>
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
