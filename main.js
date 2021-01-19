    menu_list_array=["Chicken Tandoori Pizza",
                 "New York-Style Pizza",
                 "Greek Pizza",
                 "Californian Pizza",
                 "Neapolitan Pizza"];
                 console.log(menu_list_array);
                 function getmenu(){
                     document.getElementById("display_menu").innerHTML=menu_list_array;

                 }
                 function add_item(){  
                 toppings=["mushrooms","tomatoes","corn","chicken","pepperoni","jalapeño"];
                 data="<section class='cards'>"
                 for(var i=0;i<toppings.length;i++){
                     data=data+"<div class='card'>"+"<img src='https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg'>"+toppings[i]+"</div>"
                 }
                 data=data+"</section>"
                 document.getElementById("toppings").innerHTML=data;}
                               