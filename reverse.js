//  lekha ke ulta kore dekhanor jnno niceher command ti use kora lagbe 

const sentence= 'My Name is MD JUYEL RANA';
let reverse='';
for(const letter of sentence){
    reverse= letter+reverse;

}
console.log(reverse);



// আরো বিভিন্য ভাবে লেখা কে উলটানো যায়
let rev= '';
 for( i=0; i<sentence.length; i++){
    console.log(i);
    const letter1= sentence[i];
    rev= letter1+rev;
 }
 console.log(rev);




//  3rd step for string reverse 

const reversed= sentence.split('').reverse().join('');
console.log(reversed);

