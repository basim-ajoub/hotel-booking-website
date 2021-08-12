$(document).ready(function(){
$("#add-employer").click(function(){
    $(".hide").hide();
    $(".container .add-employer").show();
});

$("#add-guest").click(function(){
    $(".hide").hide();
    $(".container .add-guest").show();

});
$("#home-button").click(function(){
    $(".hide").hide();
    $(".home-page").show(function(){
        $(".box-lf-bottom").css({height:'40vh'});
        $(".box-rt-bottom").css({height:'40vh'});
    });
});
$("#add-room").click(function(){
    $(".hide").hide();
    $(".container .room").show();
});

$("#add-room-button").click(function(){
    var newRoomType = $("#room-type").val();
    var newRoomNumber = $("#room-number").val();
    var newRoomSituation = $("#room-situation").val();
    var newRoomFloor = $("#room-floor").val();
    var newRoomAvailability = $("#room-availability").val();
    var newRoom = $('<div id="add-room"><div id="add-room-image"> <img src="images/singleroom.jpg"></img> </div><div id="add-room-discription"> <h5  id="room-type-galery"></h5><p id="room-number-galery"></p><p id="roomfloorr">floor 1</p> </div> </div>')
    $(".room-galery").append(newRoom);
    $("#room-type-galery").text(newRoomType);
    $("#room-number-galery").text(newRoomNumber);

});

$("#show-our-guest-list-btn").click(function(){
    $(".hide").hide();
    $(".container .show-gast").show();
});

$("#add-guest-btn").click(function(){
    $(".hide").hide();
    var guestName = $(".guest-name").val();
    var guestNationality = $(".guest-nationality").val();
    var gustRoomNumber = $(".room-number").val();
    var gustBookingDateFrom = $(".guest-booking-from").val();
    var gustBookingDateTo = $(".guest-booking-to").val();
   
    //calculate the total days by taking time in date 'booking from' and time in date 'booking to' and then take the diffrrence and divided by milisecond in every booking day 
    let datefrom = new Date(gustBookingDateFrom);
    let dateto = new Date(gustBookingDateTo);
    let difftime = dateto.getTime() - datefrom.getTime();
    let msinday = 1000 * 3600 * 24 ;
    var totalnights = difftime/msinday;
   
    //get real time 
    var currentDate = new Date();
    var gusetReservationDate = currentDate.toUTCString();    
    var newGuestBooking = $('<tr><td class = "guest-name-table"></td><td class="guest-nationality-table"></td><td class="room-number-table"></td><td class="guest-reservation-date-table"> 18-2-2021</td><td class="guest-booking-from-table"></td><td class="guest-booking-to-table"></td><td class="guest-booking-total-night-table"></td></tr>');
    $(".gasts-lists").append(newGuestBooking);
    //$(".gasts-lists .guest-name-table").val($(".add-guest hide .guest-name").val())
    $(".guest-name-table").text(guestName);
    $(".guest-nationality-table").text(guestNationality);
    $(".room-number-table").text(gustRoomNumber);
    $(".guest-reservation-date-table").text(gusetReservationDate)
    $(".guest-booking-from-table").text(gustBookingDateFrom);
    $(".guest-booking-to-table").text(gustBookingDateTo);
    $(".guest-booking-total-night-table").text(totalnights);  
        //$(".guest-name-table").text($(".guest-name").val()) 
    $(".container .show-gast").show();
    
    

});


});



//-------------Vue JS-----------------

var addRm = new Vue({
    el:'#add-room-vue',
    data:{
        qRoom : 10,
    },
    method:{
        
    },
})



//Vue.component('app-add',{
  //  data: function() {
 //       return {
  //          roomtypejs:'single',
 //       }
 //   },
  //  template: '<p>this room is {{ roomtypejs }}</p>',
//})
//var bas = new Vue({
//el:'.newroomvuejs',
//data:{
 //       roomt: 'single',
 //   },
 //  method:{
      
 //   },

//})
