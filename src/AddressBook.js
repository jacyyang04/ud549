const AddressBook = () => {
  this.contacts = [];
};

AddressBook.prototype.addContact = (contact) => {
  this.contacts.push(contact);
};
AddressBook.prototype.getContact = (index) => {
  return this.contacts[index];
};
