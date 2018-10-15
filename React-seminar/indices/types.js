"use strict"

export class Address {
    constructor(street, postCode, city, countryCode) {
        this.street = street;
        this.postCode = postCode;
        this.city = city;
        this.countryCode = countryCode;
    }
}

export default class Person {
    constructor(firstName, lastName, birthDate, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
    }
}

export function showPerson(person) {
    alert(JSON.stringify(person, null, 2))
}

let vip = new Person("John Q", "Public", new Date(1999, 2, 6), new Address(
    "Haller Str 5", "88888", "Achtstadt", "ger"));
export { vip };