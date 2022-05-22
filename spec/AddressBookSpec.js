describe("Address Book", () => {
  // beforeEach(() => {
  //   //arrange
  //   let addressBook = new AddressBook();
  //   let thisContact = new Contact();
  // });
  it("should be able to add a contact", () => {
    //arrange
    let addressBook = new AddressBook();
    let thisContact = new Contact();
    // act
    addressBook.addContact(thisContact);
    //assert
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it("should be able to delete", () => {
    //arrange
    let addressBook = new AddressBook();
    let thisContact = new Contact();
    //act
    addressBook.deleteContact(thisContact);
    //assert
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});
