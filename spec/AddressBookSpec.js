describe("Address Book", function () {
  it("should be able to add a contact", function () {
    // arrange
    let addressBook = new AddressBook();
    let thisContact = new Contact();
    // act
    addressBook.addContact(thisContact);
    //assert
    expect(addressBook.getContact(0)).toBe(thisContact);
  });
});
