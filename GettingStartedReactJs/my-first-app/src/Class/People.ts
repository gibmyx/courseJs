import PeopleInterfas from "./../Interfaces/PeopleInterfas";

class People implements PeopleInterfas {
    firstName: String = ""
    lastName: String = ""

    constructor(
        firstName: String,
        lastName: String
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export default People