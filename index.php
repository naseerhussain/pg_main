<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">

	<link href="css/bootstrap.min.css" rel="stylesheet">

	<link href="css/smoothState.css" rel="stylesheet">

	<link href="css/jquery.tagsinput.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="css/main.css">


    <script type="text/javascript" charset="utf-8" src="lib/jquery.min.js"></script>

	<script type="text/javascript" src="lib/bootstrap.min.js"></script>

	<script type="text/javascript" src="lib/masonry.pkgd.min.js"></script>

	<script type="text/javascript" src="lib/jquery.tagsinput.js"></script>


<title>Paying Guest</title>

<style>
.small{
    height: 30px;
}

</style>

</head>
<body>

	<div class="page-header" style="background-color:#333;margin-top:-20px;">
        <br><br>
        <h1><span style="margin-left:5%;color:white;margin-top:2%;">Paying</span><span style="color:#cc0033;">Guest</span></h1>
        <button id="register" class="btn btn-default btn-xs pull-left" style="margin-left:78%;background-color:#484848;color:white;margin-top:-3%;">Register</button>
        <div class="dropdown pull-right" style="margin-top:-3%;">
            <button class="btn btn-default btn-xs dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="margin-left:-150%;background-color:#484848;color:white;">
                User Login
                <span class="caret"></span>
            </button>
            
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1" style="margin-right:145%;background-color:#484848;">
               <div class="account-wall" style="margin-left:1%;">
                    <form class="form-signin" style="width:95%;">
                        <input type="text" class="small" placeholder="   Name" id="userName" class="form-control"></input><br/>
                        <input type="text" class="small" placeholder="   Password" id="userPwd" class="form-control"></input><br/>
                        <button id="userSignIn" class="btn btn-lg btn-primary join-btn">Sign In</button>
                    </form>
                </div>
            </ul>
        </div>
        <div class="dropdown pull-right" style="margin-top:-3%;">
            <button class="btn btn-default btn-xs dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="margin-left:-15%;background-color:#484848;color:white;">
                Owner Login
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2" style="margin-right:10%;background-color:#484848;">
               <div class="account-wall" style="margin-left:1%;">
                    <form class="form-signin" style="width:95%;">
                        <input type="text" class="small" placeholder="   Name" id="ownerName" class="form-control"></input><br/>
                        <input type="password" class="small" placeholder="   Password" id="ownerPwd" class="form-control"></input><br/>
                        <button id="ownerSignIN" class="btn btn-lg btn-primary join-btn">Sign In</button>
                    </form>
                </div>
            </ul>
        </div>

    </div>

    <div class="container">

        <!--Searchboxes code starts here -->
        <div class="row" >
            <div class="col">
                <table class="table table-condensed" style="text-align:center;" id="table">
                    <thead>
                        <tr>
                            <th style="text-align:center">Location</th>
                            <th style="text-align:center">Male/Female</th>
                            <th style="text-align:center">Sharing Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input class="tags" type="text" id="searchLocation"></td>
                            <td><input class="tags" type="text" id="searchGender"></td>
                            <td><input class="tags" type="text" id="searchSharing"></td>
                        </tr>
                    <tbody>
                </table>
            </div>
        </div><!--Search ends here-->

        <!--Masonry container code starts here-->
        <div class="row" style="margin-top:2%; background-color:#E0E0E0;">
            <div class = "tiles">
                <!--<div class="tiles-li col-sm-6 col-md-4 col-lg-3"><div class="well">3<br>product</div></div>-->
                <div class="masonry-container" id="thumbnails">
                </div>
            </div>
        </div><!--Masonry container code ends here-->


    </div>
</body>
</html>

