// import React, { Component } from "react";
import {useState, useEffect} from 'react';
import ContainerApp from "./Container/Container.jsx";
import Form from "./ContactForm/ContactForm.jsx";
import { Title } from "./Container/Container.styled.jsx";
import { ContactList } from "./ContactList/ContactList.jsx";
import { Filter } from "./Filter/Filter.jsx";
import { v4 as uuidv4 } from "uuid";

function App () {
 
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const[contacts, setContacts] = useState(()=> {
     return JSON.parse(window.localStorage.getItem('contact')) ?? initialContacts; 
    });
    const[filter, setFilter] = useState('');

  const addContactApp = (name, number) => {
    const AddedContact = {
      id: uuidv4(),
      name,
      number,
    };

    const isRepeatableContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isRepeatableContact) {
      alert(`${name} is alredy in contacts`);
    } else {
      setContacts(prevState => (
         [AddedContact, ...prevState]
      ));
    }
  };

  const delContact = (contactId) => {
    setContacts(prevContacts => 
      prevContacts.filter(
        (contact) => contact.id !== contactId)
    );
  };

  const onChangeFilter = (e) => {
    setFilter(e.currentTarget.value );
  };

  const getFilteredContacts = () => {
   

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

useEffect(()=> {
  console.log('App componentDidUpdate');
window.localStorage.setItem('contact', JSON.stringify(contacts));
},[contacts]);

 

    return (
      <ContainerApp>
        <Title>Phonebook</Title>
        <Form onSubmit={addContactApp} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={delContact}
        />
      </ContainerApp>
    );
  
}

export default App;






// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   addContactApp = (name, number) => {
//     const AddedContact = {
//       id: uuidv4(),
//       name,
//       number,
//     };

//     const isRepeatableContact = this.state.contacts.find(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (isRepeatableContact) {
//       alert(`${name} is alredy in contacts`);
//     } else {
//       this.setState((prevState) => ({
//         contacts: [AddedContact, ...prevState.contacts],
//       }));
//     }
//   };

//   delContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId
//       ),
//     }));
//   };

//   onChangeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   componentDidMount() {
//     console.log('App componentDidMount');

//     const contacts = localStorage.getItem('contact');
//     const parsedContacts = JSON.parse(contacts);

//     console.log(parsedContacts);
//     this.setState({contacts: parsedContacts});
//   }

//   componentDidUpdate(prevProps, prevState) {
// console.log('App componentDidUpdate');
//     if(this.state.contacts !==prevState.contacts) {
//       localStorage.setItem('contact', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     return (
//       <ContainerApp>
//         <Title>Phonebook</Title>
//         <Form onSubmit={this.addContactApp} />
//         <Title>Contacts</Title>
//         <Filter value={this.state.filter} onChange={this.onChangeFilter} />
//         <ContactList
//           contacts={this.getFilteredContacts()}
//           onDeleteContact={this.delContact}
//         />
//       </ContainerApp>
//     );
//   }
// }

// export default App;
