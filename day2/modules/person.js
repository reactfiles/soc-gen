class Person {
  ability = "i can walk";
  constructor(pability) {
    this.ability = pability;
  }
}
// named export
// export { Person };

// alias export
// export { Person as Human };

// default export
export default Person;