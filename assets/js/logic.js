// Date in page header
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

// Saved Notification


// Hour color for past current and present
function hourTracker() {
    var currentHour = moment().format("H");
    $('.time-block').each(function() {
        var eventHour = parseInt($(this).attr('id').split('hour')[1]);
        console.log(eventHour, currentHour)

        if(eventHour < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');

        } else if (eventHour == currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');

        } else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
        }

    });
};
hourTracker();


// Save item button
