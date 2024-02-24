const Subject= {
    name:'Biology',
    Teacher: 'Radeda mam',
    Chapter:'total_10',
    chapterName:['first', 'second', 'third', 'fourth'],
    page: 370,
    best_book:true,


 }
 console.log(Subject);

// অব্জেক্টের মান আলাদা করে বের করার জন্য 
console.log(Subject.page);
const good_book_price=Subject.page;

// যে কোনো একটা ভেরিয়েবল এ রাখার জন্য 
// console.log(good_book_price);





// third bracket diye acess kora

console.log(Subject['name'])



// variable diye access kora 

const subjectName=Subject['name'] ;
console.log(subjectName);