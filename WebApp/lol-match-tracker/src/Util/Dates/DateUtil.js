//Compares two strings of the default Javascript format yyyy-mm-dd
//Returns 1 if DATE1 is LATER than DATE2, -1 if DATE1 is EARLIER than DATE2, and 0 if they are equal
//Example: date1 = 2023-04-20 and date2 = 2023-01-01, this would return 1
//         date1 = 2021-11-25 and date2 = 2022-01-01, this would return -1
//         date1 = 2023-03-15 and date2 = 2023-03-15, this would return 0
export default function compareStringDates(date1, date2){
    var year1 = parseInt(date1.substring(0,4));
    var month1 = parseInt(date1.substring(5,7));
    var day1 = parseInt(date1.substring(8,10));

    var year2 = parseInt(date2.substring(0,4));
    var month2 = parseInt(date2.substring(5,7));
    var day2 = parseInt(date2.substring(8,10));

    //console.log("Comparing years: ", year1, year2);
    if(year1 > year2){
        return 1;
    }else if(year1 < year2){
        return -1;
    }

    //console.log("Comparing months: ", month1, month2);
    if(month1 > month2){
        return 1;
    }else if(month1 < month2){
        return -1;
    }

    //console.log("Comparing days: ", day1, day2);
    if(day1 > day2){
        return 1;
    }else if(day1 < day2){
        return -1;
    }

    return 0;
}