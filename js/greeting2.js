$(document).ready(function() {
    function dateTime() {
        var format="";
        var ndate = new Date();
        var hr = ndate.getHours();
        var m = ndate.getMinutes();
        var s = ndate.getSeconds();
        var h = hr % 12;
        if (s < 10) {
            s = "0" + s;
        }

        if (m < 10) {
            m = "0" + m;
        }

        if (hr < 6)
        {
            greet = ('Good Morning! <br> It is ' + (h + ":" + m + " AM,") + '<br> and unfortunately, we are closed!');
            format='AM';
        }
        else if (hr >6 && hr <12)
        {
            greet = ('Good Morning! <br> It is ' + (h + ":" + m + " AM,") + '<br> and we are open!');
            format='AM';
        }
        else if (hr >= 12 && hr < 13)
        {
            greet = ('Good Afternoon! <br> It is ' + ("12" + ":" + m + " PM,") + '<br> and we are open!');
            format='PM';}
        else if (hr >= 13 && hr < 17)
        {
            greet = ('Good Afternoon! <br> It is ' + (h + ":" + m + " PM,") + '<br> and unfortunately, <br> we are closed!');
            format='PM';
        }
        else if (hr >= 17 && hr < 24)
        {
            greet = ('Good Evening! <br> It is ' + (h + ":" + m + " PM,") + '<br> and unfortunately, <br> we are closed!');
            format='PM';
        }





        if (h < 12) {
            h = "0" + h;
            $("h3.day-message").html(greet);
        } else if (h < 18) {
            $("h3.day-message").html(greet);
        } else {
            $("h3.day-message").html(greet);
        }



        $('.date').html(h + ":" + m + ":" + s + format);
    }

    setInterval(dateTime, 1000);
});