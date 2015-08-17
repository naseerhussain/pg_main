function validateOwnerDetails(name,mobile,location,password,confirm){
        if(name == ""){
            $("#alert").html("Enter Name");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(mobile == ""){
            $("#alert").html("Enter Mobile");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(location == ""){
            $("#alert").html("Enter Location");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(password == ""){
            $("#alert").html("Enter Password");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(confirm == ""){
            $("#alert").html("Enter Confirm Password");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        return true;
    }

    function validateUserDetails(name,mobile,email,location,password,confirm){
        if(name == ""){
            $("#alert").html("Enter Name");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(mobile == ""){
            $("#alert").html("Enter Mobile");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(email == ""){
            $("#alert").html("Enter Email-id");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(location == ""){
            $("#alert").html("Enter Location");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(password == ""){
            $("#alert").html("Enter Password");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(confirm == ""){
            $("#alert").html("Enter Confirm Password");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        return true;
    }

    function validateSignIn(name,password){
        if(name == ""){
            $("#alert").html("Enter Name");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(password == ""){
            $("#alert").html("Enter Password");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        return true;
    }

    function validatePG(name,address,city,mobile){
        if(name == ""){
            $("#alert").html("Enter Name");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(address == ""){
            $("#alert").html("Enter Address");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(city == ""){
            $("#alert").html("Enter City");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        if(mobile == ""){
            $("#alert").html("Enter Mobile");
            $("#errorAlertModal").modal('toggle');
            return false;
        }
        return true;
    }