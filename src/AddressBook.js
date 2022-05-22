class AddressBook {
  constructor() {
    this.contacts = [];
    this.initialComplete = false;
  }
  addContact(contact) {
    this.contacts.push(contact);
  }
  getContact(index) {
    return this.contacts[index];
  }
  deleteContact(index) {
    this.contacts.pop(index);
  }
}

// AddressBook.prototype.getInitialContacts = function (cb) {
//   let self = this;
//   //async method
//   setTimeout(function () {
//     this.initialComplete = true;
//     if (cb) {
//       return cb;
//     }
//   }, 3);
// };
