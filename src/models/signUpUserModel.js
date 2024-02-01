class SignUpUserModel {
    constructor(data) {
        this.fname = data.firstName;
        this.lname = data.lastName;
        this.email = data.email;
        this.password = data.password;
      
    }
}

export default SignUpUserModel;
