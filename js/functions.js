
    //Clear the screen function
    function clearContainer(){
        $("div .thumbnail").remove();
    }

    //Show the details of the clicked tile
    function showFullDetails(clicked,pgDetails){
        console.log(pgDetails);
        var div = '<div style="width:96%;margin-left:2%;margin-right:1%;margin-top:2%;background-color:#333;color:white;font-size:18px;"><legend align="center" style="color:white;">'+pgDetails[clicked].name+'</legend>';
        div += '<div style="margin-left:2%;"><label>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><span>'+pgDetails[clicked].address+'</span></div>';
        div += '<div style="margin-left:2%;"><label>city&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><span>'+pgDetails[clicked].city+'</span></div>';
        div += '<div style="margin-left:2%;"><label>Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><span>'+pgDetails[clicked].mobile+'</span></div>';
        if(pgDetails[clicked].Sharing == "accomodationOnly"){
            var type = "Accomodation Only";
        }else{
            var type = "Food and Accomodation";
        }
        div += '<div style="margin-left:2%;"><label>Accomodation Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><span>'+type+'</span></div>';
        div += '<div style="margin-left:2%;"><label>Sharings Available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><span>';
        var share ="";
        for(var i=0;i<pgDetails[clicked].pgFor.length;i++){
            if(pgDetails[clicked].pgFor[i] == "more5"){
                share += "More than 5";
            }else{
                share += pgDetails[clicked].pgFor[i];    
                share += ",";
            }

        }
        div += share+'</span></div>';
        div += '<div style="margin-left:2%;"><label>Facility Available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><span>';
        
        var facility = "";
        for(var j=0;j<pgDetails[clicked].facility.length;j++){
            facility += pgDetails[clicked].facility[j];
            if(j != pgDetails[clicked].facility.length-1){
                facility += ", ";
            }
            
        }
        div += facility+'</span></div>';
        div += '</div>';
        var ratings = '<div style="width:96%;margin-left:2%;margin-right:1%;margin-top:2%;background-color:#333;color:white;font-size:18px;">';
        ratings += '<legend style="color:white;"><span style="margin-left:2%;">User Ratings</span></legend>';
        //ratings += '<div style="margin-left:2%;"><span>Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="rating" id="food" data-min="0" data-max="5" data-step="0.1" data-size="xs" data-readonly="true" value="3.6"></span></div>';
        ratings += '<div style="margin-left:2%;"><label style="float:left;">Food &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><div style="width:30%;float:left;margin-top:-2%;"><input class="rating" id="food" data-min="0" data-max="5" data-step="0.1" data-size="xs" data-readonly="true" value="3.6" style="width:50%;"></div></div><br>';
        ratings += '<br><div style="margin-left:2%;"><label style="float:left;">Parking Facility &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><div style="width:30%;float:left;margin-top:-2%;"><input class="rating" id="parking" data-min="0" data-max="5" data-step="0.1" data-size="xs" data-readonly="true" value="4.2" style="width:50%;"></div></div><br>';
        ratings += '<br><div style="margin-left:2%;"><label style="float:left;">Hygiene &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><div style="width:30%;float:left;margin-top:-2%;"><input class="rating" id="hygiene" data-min="0" data-max="5" data-step="0.1" data-size="xs" data-readonly="true" value="4" style="width:50%;"></div></div><br>';
        ratings += '<br><div style="margin-left:2%;"><label style="float:left;">Overall Rating of PG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><div style="width:30%;float:left;margin-top:-2%;"><input class="rating" id="pgRating" data-min="0" data-max="5" data-step="0.1" data-size="xs" data-readonly="true" value="4.3" style="width:50%;"></div></div><br>';
        ratings += '<br></div>';
        //ratings += '</div>';
        var rateThis = '<div style="width:96%;margin-left:2%;margin-right:1%;margin-top:2%;background-color:#333;color:white;font-size:18px;">';
        rateThis += '<legend style="color:white;"><span style="margin-left:2%;">Rate this PG</span></legend>';

        rateThis += '<div style="margin-left:2%;"><label style="float:left;">Food &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><div style="width:60%;float:left;margin-top:-2%;"><input class="rating" id="Ratefood" data-min="0" data-max="5" data-step="0.1" data-size="xs" style="width:50%;"></div></div><br>';
        rateThis += '<br><div style="margin-left:2%;"><label style="float:left;">Parking Facility &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><div style="width:60%;float:left;margin-top:-2%;"><input class="rating" id="Rateparking" data-min="0" data-max="5" data-step="0.1" data-size="xs"  style="width:50%;"></div></div><br>';
        rateThis += '<br><div style="margin-left:2%;"><label style="float:left;">Hygiene &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><div style="width:60%;float:left;margin-top:-2%;"><input class="rating" id="Ratehygiene" data-min="0" data-max="5" data-step="0.1" data-size="xs" style="width:50%;"></div></div><br>';
        rateThis += '<br><div style="margin-left:2%;"><label style="float:left;">Overall Rating of PG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><div style="width:60%;float:left;margin-top:-2%;"><input class="rating" id="RatepgRating" data-min="0" data-max="5" data-step="0.1" data-size="xs"  style="width:50%;"></div></div><br>';
        rateThis += '<button id="rateThisPg" class="btn btn-lg btn-primary join-btn" style="width:52%;margin-left:2%;">Rate This PG</button><br><br></div><br><br>';

        $("#thumbnails").append(div);
        $("#thumbnails").append(ratings);  
        $("#thumbnails").append(rateThis);
        $("#food").rating();
        $("#parking").rating();
        $("#hygiene").rating();
        $("#pgRating").rating();
        $("#Ratefood").rating();
        $("#Rateparking").rating();
        $("#Ratehygiene").rating();
        $("#RatepgRating").rating();
    }

    