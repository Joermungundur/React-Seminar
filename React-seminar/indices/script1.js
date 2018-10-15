import PersonWithAddress from "./types";
import { Address, showPerson, vip } from "./types";

let persons = [
    new PersonWithAddress("Max", "Belli", new Date(1986, 11, 15),
        new Address("Johann-Clanze-Straße 48", "81369", "Munich", "ger")),
    new PersonWithAddress("Nemo", "Odysseus", new Date(1910, 2, 5),
        new Address("test 1", "00000", "Ithaka", "gr")),
    new PersonWithAddress("Leman", "Russ", new Date(39980, 4, 12),
        new Address("The Fang 1", "0111", "Fenris", "ger"))
];
persons.forEach(person => showPerson(person));
delete vip.address;