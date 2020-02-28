exports.demo = function(){
    console.log('Hello! This is a demo message.');
}

function friendlyDate(date){
    if(date === undefined) return '';

    date = new Date(date);
    let period = 0;
    let diffDays = Math.round((new Date().getTime() - date.getTime())/(1000*60*60*24));
    let diffHours = Math.round((new Date().getTime() - date.getTime())/(1000*60*60));
    let diffMinutes = Math.round((new Date().getTime() - date.getTime())/(1000*60));

    if(diffDays > 365){
        period = Math.ceil(diffDays / (365*2));
        return period > 1 ? period + ' years ago.' : 'one year ago.';
    }

    if(diffDays > 30){
        period = Math.ceil(diffDays /(30*2));
        return period > 1 ? period + ' months ago.' : 'one month ago.';
    }

    if(diffDays > 7){
        period = Math.ceil(diffDays / (7*2));
        return period > 1 ? period + ' weeks ago.' : 'one week ago.';
    }

    if (diffHours > 24){
        period = Math.ceil(diffHours / (24*2));
        return period > 1 ? period + ' days ago.' : 'one day ago.';
    }

    if(diffMinutes > 59){
        period = Math.ceil(diffMinutes / (60 * 2));
        return period > 1 ? period + ' hours ago.' : 'one hour ago.';
    }

    return 'moments ago.';
}