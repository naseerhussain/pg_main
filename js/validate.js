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