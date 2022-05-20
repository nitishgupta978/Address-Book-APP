let add = [];
      class arrayStore {
        addObject(Object) {
          add.push(Object);
        }
        showArray() {
          console.table(add);
        }
      }
      function save() {
        var name = document.getElementById("name").value;
       
        var phoneNumber = document.getElementById("phoneNumber").value;
        
        selectCity = document.querySelector("#city");
        var city = selectcity.value;
        selectstate = document.querySelector("#state");
        var state = selectstate.value;

        var RegexFN = new RegExp("^[A-Z][a-z]{3,}*");
        var RegexMN = new RegExp("^[9]+[1]+[0-9]{10}");
        // var RegexP = new RegExp("^[A-Z][a-z0-9]{7,}");

        if (
          name == "" ||
          phoneNumber == "" ||
          city == "Select" ||
          state == "Select"
         
        ) {
          alert("Please Enter the data");
              } else if (name <= 20 || !RegexFN.test(name)) {
          alert("Please Start FirstName with capital letter");
              } else if (!RegexMN.test(phoneNumber)) {
          alert("Invalid Mobile Number and should start with 91");
         alert("Enter Password start with capital letter and must be at least 8 characters");
             } else {
          console.log(
            " name:" +
              name +
              
              "| phoneNmber:" +
              phoneNumber +
              "| city:" +
              city +
              "| state:" +
              state
            );
          alert("Registration Successful");


          var object = {
            name: document.getElementById("name").value,
            phoneNumber: document.getElementById("phoneNumber").value,
           
          };
          console.table(object);

          let store = new arrayStore();
          store.addObject(object);
          store.showArray();
        //   let.table(registrationData);
        }
      }

      function Reset() {
        document.getElementById("name").value = "";
         document.getElementById("phoneNumber").value = "";
        
      }
