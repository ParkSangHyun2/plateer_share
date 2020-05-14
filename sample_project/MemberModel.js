function MemberModel() {
    this.email='';
    this.password='';
    this.location='';

}

const getMemberInstance = function(email, password, location) {
    let instance = new MemberModel();

    instance.email = email;
    instance.password = password;
    instance.location = location;

    return instance;
}