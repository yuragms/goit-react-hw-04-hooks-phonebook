// import React, { Component } from "react";
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import { ContactForm, Label, Input, Button } from "./ContactForm.styled";

function Form ({onSubmit}) {
  // state = {
  //   name: "",
  //   number: "",
  // };
  const [name, setName] = useState('');
  const [number, setNumber] =  useState('');

 const nameInputId = uuidv4();
 const numberInputId = uuidv4();

  const handleChange = (e) => {
    // this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    const {name, value} = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
        case 'number':
          setNumber(value);
          break;

          default: return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { name, number } = this.state;
    onSubmit(name, number);
    console.log(name, number);
    reset();
  };

  const reset = () => {
    // this.setState({ name: "" });
    // this.setState({ number: "" });
    setName('');
    setNumber('');

  };

  
    return (
      <ContactForm onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </Label>
        <Label htmlFor={numberInputId}>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            id={numberInputId}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContactForm>
    );
  
}

export default Form;
