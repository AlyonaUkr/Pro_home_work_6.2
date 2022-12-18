let year = prompt('Write year of your born, please');
let city = prompt('Write which city do you live, please');
let kindSport = prompt('Write your favorite kind of sport, please');

if (year === null) {
    resultYear = ('It is a pity, that you did not want to enter your year of born.');
} else {
    resultYear = ('You were born in ' + year + '.');
}

if (city === 'Kyiv') {
    resultCity = ('You live in capital of Ukraine.');
} else if (city === 'London') {
    resultCity = ('You live in capital of Great Britain.');
} else if (city === 'Washington') {
    resultCity = ('You live in capital of USA.');
} else if (city === null) {
    resultCity = ('It is a pity, that you did not want to enter your city of residence.');
} else {
    resultCity = ('You live in ' + city + '.');
}

if (kindSport === 'football') {
    resultSport = ('Cool! Do you want to be like Lionel Messi?');
} else if (kindSport === 'boxing') {
    resultSport = ('Cool! Do you want to be like Oleksandr Usyk?');
} else if (kindSport === 'gymnastics') {
    resultSport = ('Cool! Do you want to be like Lilia Podkopayeva?');
} else if (kindSport === null) {
    resultSport = ('It is a pity, that you did not want to enter your favorite kind of sport.');
}else {
    resultSport = ('You are next champion in ' + kindSport + '.');
}

let userResults = ('' + resultYear + ' ' + resultCity + ' '+resultSport+'');

alert(userResults);