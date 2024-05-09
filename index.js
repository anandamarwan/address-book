const contacts = [
  {
    id: 1,
    fullName: "Ananda Marwan",
    age: 24,
    phone: "+62 813 7103 1191",
  },
  {
    id: 2,
    fullName: "Salsabila",
    age: 22,
    phone: "+62 813 7103 1431",
  },
  {
    id: 3,
    fullName: "Amroati Soleha",
    age: 40,
    phone: "+62 813 7103 1531",
  },
];

function renderContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    const ageCategory = contact.age > 30 ? "is old enough" : "is still young";

    console.log(
      `${contact.id}. ${contact.fullName} (${contact.phone}) ${ageCategory}`
    );
  }
  console.log("");
}

function addContact(fullName, age, phone) {
  const lastId = contacts[contacts.length - 1].id;

  contacts.push({ id: lastId + 1, fullName, age, phone });

  renderContacts();
}

renderContacts();
addContact("Mark", 40, "+123");
addContact("Bill", 60, "+1456");
