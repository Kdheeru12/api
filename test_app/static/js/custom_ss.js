$( document ).ready(function() {
var HOME_URL = window.location.origin;
var pathname = window.location.pathname;

    $(".custom-ss-firstname").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_registration').attr('disabled', false);
        $(".custom-ss-firstname").css("border","1px solid #eee");
        $(".custom-ss-lastname").css("border","1px solid #eee");
        $(".custom-ss-schoolname").css("border","1px solid #eee");
        $(".custom-ss-address").css("border","1px solid #eee");
        $(".custom-ss-city").css("border","1px solid #eee");
        $(".custom-ss-password").css("border","1px solid #eee");
        $(".custom-ss-email").css("border","1px solid #eee");
        $(".custom-ss-mobile").css("border","1px solid #eee");
    });
    $(".custom-ss-lastname").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_registration').attr('disabled', false);
        $(".custom-ss-firstname").css("border","1px solid #eee");
        $(".custom-ss-lastname").css("border","1px solid #eee");
        $(".custom-ss-schoolname").css("border","1px solid #eee");
        $(".custom-ss-address").css("border","1px solid #eee");
        $(".custom-ss-city").css("border","1px solid #eee");
        $(".custom-ss-password").css("border","1px solid #eee");
        $(".custom-ss-email").css("border","1px solid #eee");
        $(".custom-ss-mobile").css("border","1px solid #eee");
    });
    $(".custom-ss-schoolname").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_registration').attr('disabled', false);
        $(".custom-ss-firstname").css("border","1px solid #eee");
        $(".custom-ss-lastname").css("border","1px solid #eee");
        $(".custom-ss-schoolname").css("border","1px solid #eee");
        $(".custom-ss-address").css("border","1px solid #eee");
        $(".custom-ss-city").css("border","1px solid #eee");
        $(".custom-ss-password").css("border","1px solid #eee");
        $(".custom-ss-email").css("border","1px solid #eee");
        $(".custom-ss-mobile").css("border","1px solid #eee");
    });
    $(".custom-ss-address").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_registration').attr('disabled', false);
        $(".custom-ss-firstname").css("border","1px solid #eee");
        $(".custom-ss-lastname").css("border","1px solid #eee");
        $(".custom-ss-schoolname").css("border","1px solid #eee");
        $(".custom-ss-address").css("border","1px solid #eee");
        $(".custom-ss-city").css("border","1px solid #eee");
        $(".custom-ss-password").css("border","1px solid #eee");
        $(".custom-ss-email").css("border","1px solid #eee");
        $(".custom-ss-mobile").css("border","1px solid #eee");
    });
    $(".custom-ss-city").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_registration').attr('disabled', false);
        $(".custom-ss-firstname").css("border","1px solid #eee");
        $(".custom-ss-lastname").css("border","1px solid #eee");
        $(".custom-ss-schoolname").css("border","1px solid #eee");
        $(".custom-ss-address").css("border","1px solid #eee");
        $(".custom-ss-city").css("border","1px solid #eee");
        $(".custom-ss-password").css("border","1px solid #eee");
        $(".custom-ss-email").css("border","1px solid #eee");
        $(".custom-ss-mobile").css("border","1px solid #eee");
    });
    $(".custom-ss-email").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_registration').attr('disabled', false);
        $(".custom-ss-firstname").css("border","1px solid #eee");
        $(".custom-ss-lastname").css("border","1px solid #eee");
        $(".custom-ss-schoolname").css("border","1px solid #eee");
        $(".custom-ss-address").css("border","1px solid #eee");
        $(".custom-ss-city").css("border","1px solid #eee");
        $(".custom-ss-password").css("border","1px solid #eee");
        $(".custom-ss-email").css("border","1px solid #eee");
        $(".custom-ss-mobile").css("border","1px solid #eee");
    });
    $(".custom-ss-password").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_registration').attr('disabled', false);
        $(".custom-ss-firstname").css("border","1px solid #eee");
        $(".custom-ss-lastname").css("border","1px solid #eee");
        $(".custom-ss-schoolname").css("border","1px solid #eee");
        $(".custom-ss-address").css("border","1px solid #eee");
        $(".custom-ss-city").css("border","1px solid #eee");
        $(".custom-ss-password").css("border","1px solid #eee");
        $(".custom-ss-email").css("border","1px solid #eee");
        $(".custom-ss-mobile").css("border","1px solid #eee");
    });
    $(".custom-ss-mobile").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_registration').attr('disabled', false);
        $(".custom-ss-firstname").css("border","1px solid #eee");
        $(".custom-ss-lastname").css("border","1px solid #eee");
        $(".custom-ss-schoolname").css("border","1px solid #eee");
        $(".custom-ss-address").css("border","1px solid #eee");
        $(".custom-ss-city").css("border","1px solid #eee");
        $(".custom-ss-password").css("border","1px solid #eee");
        $(".custom-ss-email").css("border","1px solid #eee");
        $(".custom-ss-mobile").css("border","1px solid #eee");
    });

    $(".custom_ss_registration").click(function(){
    var firstname = $(".custom-ss-firstname").val();
    var lastname = $(".custom-ss-lastname").val();
    var schoolname = $(".custom-ss-schoolname").val();
    var address = $(".custom-ss-address").val();
    var city = $(".custom-ss-city").val();
    var email = $(".custom-ss-email").val();
    var mobile = $(".custom-ss-mobile").val();
    var password = $(".custom-ss-password").val();

    if(firstname.length === 0 || lastname.length === 0 || schoolname.length === 0 || address.length === 0 || city.length === 0 || email.length === 0 || password.length === 0 || mobile.length === 0){

    $('.custom_ss_registration').attr('disabled', 'disabled');
     }

    var is_false = 0

    if(firstname.length === 0){
        $(".custom-ss-firstname").css("border","1px solid red");
        is_false = 1
    }
    if(lastname.length === 0){
        $(".custom-ss-lastname").css("border","1px solid red");
        is_false = 1
    }
    if(schoolname.length === 0){
        $(".custom-ss-schoolname").css("border","1px solid red");
        is_false = 1
    }
    if(address.length === 0){
        $(".custom-ss-address").css("border","1px solid red");
        is_false = 1
    }
    if(city.length === 0){
        $(".custom-ss-city").css("border","1px solid red");
        is_false = 1
    }
    if(email.length === 0){
        $(".custom-ss-email").css("border","1px solid red");
        is_false = 1
    }
    if(password.length === 0){
        $(".custom-ss-password").css("border","1px solid red");
        is_false = 1
    }
    if(mobile.length === 0){
        $(".custom-ss-mobile").css("border","1px solid red");
        is_false = 1
    }

//    if(password != confirm_password){
//        $(".custom-ss-password").css("border","1px solid red");
//        $(".custom-ss-confirm-password").css("border","1px solid red");
//        is_false = 1
//
//    }
    if(is_false == 1){
        return false;
    }

    data={"firstname":firstname,"lastname":lastname,"schoolname":schoolname,"address":address,"city":city,"password":password,"email":email,"mobile":mobile}
        $.ajax(
        {
            type:'GET',
            data:data,
            url: HOME_URL+"/add_user/",
            success: function(result){
                    var response = JSON.parse(JSON.stringify(result))
                    if(response.status =='success')
                    {
                    window.location.href = HOME_URL+"/verify_code/"+email+"/"+password;
                    }
                    else{
                         $(".custom-ss-p-tag").text(response.data);
                    }
            }
        });

});


    $(".custom_ss_password").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_modify_password').attr('disabled', false);
        $(".custom_ss_password").css("border","1px solid #eee");
        $(".custom_ss_new_password").css("border","1px solid #eee");
        $(".custom_ss_confirm_password").css("border","1px solid #eee");
        });
        $(".custom_ss_new_password").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_modify_password').attr('disabled', false);
        $(".custom_ss_password").css("border","1px solid #eee");
        $(".custom_ss_new_password").css("border","1px solid #eee");
        $(".custom_ss_confirm_password").css("border","1px solid #eee");
        });
        $(".custom_ss_confirm_password").keyup(function() {
//        $(".custom-ss-p-tag").text('');
        $('.custom_ss_modify_password').attr('disabled', false);
        $(".custom_ss_password").css("border","1px solid #eee");
        $(".custom_ss_new_password").css("border","1px solid #eee");
        $(".custom_ss_confirm_password").css("border","1px solid #eee");
        });

    $(".custom_ss_modify_password").click(function(){
        var password = $(".custom_ss_password").val();
        var new_password = $(".custom_ss_new_password").val();
        var confirm_password = $(".custom_ss_confirm_password").val();
        var username = $(".custom_ss_username").val();
        var is_false = 0
        if(password.length === 0 || new_password.length === 0 || confirm_password.length === 0){
            $('.custom_ss_modify_password').attr('disabled', 'disabled');
        }
        if(password.length === 0){
        $(".custom_ss_password").css("border","1px solid red");
        is_false = 1
    }
    if(password.length === 0){
        $(".custom_ss_new_password").css("border","1px solid red");
        is_false = 1
    }
    if(confirm_password.length === 0){
        $(".custom_ss_confirm_password").css("border","1px solid red");
        is_false = 1
    }

    if(new_password != confirm_password){
        $(".custom_ss_new_password").css("border","1px solid red");
        $(".custom_ss_confirm_password").css("border","1px solid red");
        is_false = 1

    }
    if(is_false == 1){
        return false;
    }

    data={"password":password,"new_password":new_password,"confirm_password":confirm_password,"id":username}
        $.ajax(
        {
            type:'GET',
            data:data,
            url: HOME_URL+"/modify_password/",
            success: function(result){
                    var response = JSON.parse(JSON.stringify(result))
                    if(response.status =='success')
                    {
                    window.location.href = HOME_URL+"/home/";
                    }
                    else{
                         $(".custom-ss-p-tag").text(response.data);
                    }
            }
        });
    })

});