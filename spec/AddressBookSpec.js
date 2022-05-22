describe("Address Book", () => {
  // set these variables to global vars
  let addressBook;
  let thisContact;

  beforeEach(() => {
    //arrange
    addressBook = new AddressBook();
    thisContact = new Contact();
  });
  it("should be able to add a contact", () => {
    // act
    addressBook.addContact(thisContact);
    //assert
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it("should be able to delete", () => {
    //act
    addressBook.deleteContact(thisContact);
    //assert
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

// describe("Async AddyBookie", () => {
//   //arrange
//   let addressBook = new AddressBook();
//   beforeEach(function (done) {
//     //arrange aync func
//     addressBook.getInitialContacts(function () {
//       done();
//     });
//   });

//   it("should grab initial contacts", function (done) {
//     //assert
//     expect(addressBook.initialComplete).toBe(true);
//     done();
//   });
// });
