import Vijay from "./person.js";

class Hero extends Vijay {
  title;
  firstname;
  lastname;
  #mission = "Save the world";
  static version = 1001;
  constructor(fname, lname, title, hability) {
    super(hability);
    this.firstname = fname;
    this.lastname = lname;
    this.title = title;
  }
  fullname() {
    return this.firstname + " " + this.lastname;
  }
  saymission() {
    return this.#mission;
  }
  get accessMission() {
    return this.#mission;
  }
  set accessMission(nmission) {
    this.#mission = nmission;
  }
}

export { Hero };