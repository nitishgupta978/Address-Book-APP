class AddressBookData {
    // getter and setter method

    
    get name () {return this.name;}
    set name(name){
        let nameRegex =RegExp('^[A-Z]{1}[a-zA-Z\\S]{2,}$')
        if (nameRegex.test(name))
        this._name = name;
        else throw 'Name is Incorrect';
    }

    get PhoneNumber () {return this.PhoneNumber;}
    set PhoneNumber(PhoneNumber){
        let   PhoneNumberRegex =RegExp('^[0-9]{2}\\s{1}[0-9]{10}$')
        if ( PhoneNumber.test( PhoneNumber))
        this._PhoneNumber =  PhoneNumber;
        else throw ' PhoneNumber is Incorrect';
    }
    
toString (){
    return "name="+this.name +",PhoneNumber="+this.PhoneNumber;
}

}