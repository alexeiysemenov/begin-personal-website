const Main = require('@architect/views/main.js')
const arc = require('@architect/functions')

// Customize your site by changing the data below
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div class="something" style=" height:100vh; background: url('https://i.stack.imgur.com/sxAz0.jpg')">
    sdfsdfas sadfa sdf sad asdf asdf sadf as fd sdfsdfas sadfa sdf sad asdf asdf sadf as fdsdfsdfas sadfa sdf sad asdf
    asdf sadf as fdsdfsdfas sadfa sdf sad asdf asdf sadf as fdsdfsdfas sadfa sdf sad asdf asdf sadf as fdsdfsdfas sadfa
    sdf sad asdf asdf sadf as fdsdfsdfas sadfa sdf sad asdf asdf sadf as fd
    <!--Копировать отсюда-->
    <div class="popup_holder">
        <div class="blur"></div>
        <div class="popup_info_container">
            <div class="popup_info_holder">
                <h2 class="popup_header">Some important questions?</h2>
                <p class="popup_description">Should i press the button or not</p>
                <div class="popup_container">
                    <!--<a class="popup_button popup_button-yes" href="/somewhere">Yes</a>-->
                    <!--<a class="popup_button popup_button-no" href="/somewhere_else">No</a>-->
                    <!--Большая кнопка-->
                    <a class="popup_button popup_button-big" href="/somewhere_else">YES</a>
                </div>
            </div>
        </div>
    </div>
    <style>
        .popup_holder * {
            text-decoration: none;
        }
        .popup_holder {
            z-index: 9999;
            display: none;
            /*display: flex;*/
            position: fixed;
            top:0;
            left:0;
            height: 100vh;
            width: 100%;
            backdrop-filter:blur(5px);
            justify-content: center;
            align-items: center;
        }
        .popup_info_holder {
            min-width: 300px;
            width: 50%;
            padding: 20px;
            padding-bottom: 40px;
            background: #ffffff;
            text-align: center;
            border: 5px solid #8A8A8A;
        }
        .popup_container {
            z-index: 100;
            display: flex;
            justify-content: space-around;
            padding-top: 40px;
        }
        .popup_button {
            padding:10px 30px;
            min-width: 100px;
            background: #e60505;
            border: none;
            font-family: Lato;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            text-align: center;
            color: #FAFAFF;
            border-radius: 5px;;
        }
        .popup_button-big {
            padding:20px 40px;
        }
        .popup_button-yes {
            background: #6be67e;
        }
        .popup_button-no {
            background: #e60505;
        }
        .popup_info_container {
            z-index: 100;
            position: absolute;
            width: 100%;
            height: 100%;
            left:0;
            top:0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .blur {
            z-index: 80;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.95);
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>

        $(document).ready(function(){
            var strGET = window.location.search.replace( '?', '');
            var strSetup = "user_true";
            if(!strGET.includes(strSetup)){
             $(".popup_holder").css("display","flex");}
            else {
                console.log(1);
            }
        });
    </script>
    <!--Копировать досюда-->
</div>
</body>
</html>
