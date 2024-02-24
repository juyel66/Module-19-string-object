const collage ={
    Name:'VNC',
    class:['10', '11'],
    events:['science fair', 'bijoy dibos', '21 feb'],
    unique:{
        color: 'blue',
        result:{
            gpa:5,
            marit:'top'

        }
    }

}

collage.unique.result.marit='Very good';
console.log(collage.unique.result.marit);


collage.events[1]='16 dec';
console.log(collage.events[1]);


delete collage.class;
console.log(collage);