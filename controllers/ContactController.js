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
    this.searchQuestions = [
      {
        type: 'input',
        name: 'name',
        message: 'Name of contact to search - ',
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

  // eslint-disable-next-line class-methods-use-this
  iterativeSearch(contacts, target) {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === target.toLowerCase()) {
        return contact;
      }
    }
    return null;
  }

  // eslint-disable-next-line class-methods-use-this
  binarySearch(contacts, target) {
    let min = 0;
    let max = contacts.length - 1;
    let mid;

    while (min <= max) {
      mid = Math.floor((min + max) / 2);
      const currentContact = contacts[mid];

      if (currentContact.name > target) {
        max = mid - 1;
      } else if (currentContact.name < target) {
        min = mid + 1;
      } else {
        return contacts[mid];
      }
    }

    return null;
  }

  // eslint-disable-next-line class-methods-use-this
  search(name) {
    return Contact.findOne({
      where: { name },
    });
  }
};
