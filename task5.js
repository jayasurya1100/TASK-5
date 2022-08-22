//Anonymous Function & IIFL:

// a. Odd Number In Array(Anonymous Function):

[1,2,3,,5,6,7,8].forEach( function(a){

    var odd= a%2;

     if (odd!==0){

        console.log(a)

     }

});

// b. Convert all the strings to title caps in a string array (IIFE):

(function cap (b){

var caps=b.split(" ");

for (i=0;i<caps.length;i++){

  var g= caps[i][0].toUpperCase()+caps[i].slice(1)

 console.log(g)

}

})("convert all the strings to title caps in a string array");



// c. Sum of the numbers in an array( IIFE ):

var sum=0;

(function a (n){

  

for(var i= 0;i<n.length;i+=1){

   var num2=sum+=n[i];

}



console.log(num2);

})([1,4,-5,8,9]);



//d.return all prime numbers in an array :

[1,7,12,13,37,29].forEach(function (a){

if (a<2)

console.log("is not a prime number:",a);

for (i=2;i<a;i++){

      if(a%i === 0){

         console.log("is a prime number",a);

      }

      else{

         console.log("is not a prime number",a);

      }

   }

});

//e.return all the palindromes in an array:

var result=0;



(function pal(ok){

   var num2=ok;

   for(var i=0;i<ok;){

var num1=ok%10;

ok =parseInt(ok/10);

result=result*10+num1;

   }

if (result==num2){

   console.log("the palindromes",result)

}

else{

   console.log("is not a palindromes")

}

   

})(12321);

//f. return median of two sorted array of same size:

(function med(a,b){

  var arr= b.concat(a)

 var sor= arr.sort()

 var len= sor.length

 len=len/2

 console.log(sor[len],"medium length:",len,arr)

  

})([12,14,18,21,19],[13,16,17,15,20]);

 //g.Remove duplicates from an array:

var j=1;

 (function dup(m){

for(var i=0;i<m.length;i+=1){

   if(m[i]!==m[j++]){

console.log(m[i])

   }

   

}



 })([1,2,2,3,4,5,5]);

 // Rotate an array by k times:



 (function rot (g,k){

var n=g.length

   console.log("Rotate an array:")

for (i=0;i<n;i++){

   if(i<k){

      console.log((g[n+i-k]))

   }

   else{

    console.log((g[i-k]))

   }

}

 })([1,2,3,4,5,6],3);





 

//Arrow functions:



// Print odd number:

console.log("print odd number in arrow function")

const odd2 =(n)=>{

   for(var i=0;i<n.length;i++){

  var s= n[i]%2;

  if (s!==0){

   console.log(n[i])

  }

}

}

odd2([1,2,3,4,5])



// Convert all the strings to title caps in a string array:

console.log("strings to title caps:")

const caps =(l)=>{

   var k=l.split(" ")

for(var i=0;i<k.length;i++){

var m=k[i][0].toUpperCase()+k[i].slice(1);

console.log(m)

}

}

caps("Convert all the strings to title caps in a string array");



//Sum of all numbers in an array:

var j=[1,2,3,4,5,6]

var sum2=j.reduce((h,k)=>h+k);

    console.log(sum2);



//Return all the prime numbers in an array:

var j1= 0;

[1,8,11,13,29,31].forEach((p)=>{

   if(p<2)

   console.log("not a prime number",p)

   for(i=2;i<p;i++){

      if(p%i==0){

         console.log("not a prime number",p)

      }

         else{

            console.log("thi is prime number:",p)



         }

      }

   

})

//Return all the palindromes in an array:



console.log("the palindromes in an array:")

var result1=0;



const pal=(ok1)=>{

   var num2=ok1;

   for(var i=0;i<ok1;){

var num1=ok1%10;

ok1 =parseInt(ok1/10);

result1=result1*10+num1;

   }

if (result1==num2){

   console.log("the palindromes",result1)

}

else{

   console.log("is not a palindromes")

}

   

}

pal(12321);
