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

for (let index = 0; index < contacts.length; index++) {
  const contact = contacts[index];

  console.log("${contact.id}. ${contact.fullName} (${contact.phone})");
}
