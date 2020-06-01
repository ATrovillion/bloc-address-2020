// eslint-disable-next-line prefer-destructuring
const Contact = require('../db/models').Contact;

module.exports = class ContactController {
  constructor() {
    this.contacts = [];
    this.addContactQuestions = [
      {
        type: 'input',
        name: 'name',
        message: "Contact's name - ",
        validate(val) {
          return val !== '';
        },
      },
      {
        type: 'input',
        name: 'phone',
        message: "Contact's phone number - ",
        validate(val) {
          return val !== '';
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Contact's email address - ",
        validate(val) {
          return val !== '';
        },
      },
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  addContact(name, phone, email) {
    return Contact.create({ name, phone, email });
  }

  // eslint-disable-next-line class-methods-use-this
  getContacts() {
    // findAll() is a Sequelize method for querying database for all rows
    return Contact.findAll();
  }

  iterativeSearch(contacts, target) {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === target.toLowerCase()) {
        return contact;
      }
    }
    return null;
  }
};
