<script>
info="<!DOCTYPE html>
<html lang=&#34;en&#34;>
<head>
    <meta charset=&#34;UTF-8&#34;>
    <title>Title</title>
</head>
<body>
<div class=&#34;something&#34; style=&#34; height:100vh; background: url(&#39;https://i.stack.imgur.com/sxAz0.jpg&#39;)&#34;>
    sdfsdfas sadfa sdf sad asdf asdf sadf as fd sdfsdfas sadfa sdf sad asdf asdf sadf as fdsdfsdfas sadfa sdf sad asdf
    asdf sadf as fdsdfsdfas sadfa sdf sad asdf asdf sadf as fdsdfsdfas sadfa sdf sad asdf asdf sadf as fdsdfsdfas sadfa
    sdf sad asdf asdf sadf as fdsdfsdfas sadfa sdf sad asdf asdf sadf as fd
    <!--Копировать отсюда-->
    <div class=&#34;popup_holder&#34;>
        <div class=&#34;blur&#34;></div>
        <div class=&#34;popup_info_container&#34;>
            <div class=&#34;popup_info_holder&#34;>
                <h2 class=&#34;popup_header&#34;>Some important questions?</h2>
                <p class=&#34;popup_description&#34;>Should i press the button or not</p>
                <div class=&#34;popup_container&#34;>
                    <!--<a class=&#34;popup_button popup_button-yes&#34; href=&#34;/somewhere&#34;>Yes</a>-->
                    <!--<a class=&#34;popup_button popup_button-no&#34; href=&#34;/somewhere_else&#34;>No</a>-->
                    <!--Большая кнопка-->
                    <a class=&#34;popup_button popup_button-big&#34; href=&#34;/somewhere_else&#34;>YES</a>
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
    <script src=&#34;https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js&#34;></script>
    <script>

        $(document).ready(function(){
            var strGET = window.location.search.replace( &#39;?&#39;, &#39;&#39;);
            var strSetup = &#34;user_true&#34;;
            if(!strGET.includes(strSetup)){
             $(&#34;.popup_holder&#34;).css(&#34;display&#34;,&#34;flex&#34;);}
            else {
                console.log(1);
            }
        });
    </script>
