const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);

const searchParamId = searchParams.get("id");

console.log(searchParamId);

const id = Number(searchParamId);
console.log(id);

const getFullName = localStorage.getItem("address-book");

console.log(getFullName);
