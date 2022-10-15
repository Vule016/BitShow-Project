var a=3;
var b=4;
var c=5;
if (a==b & b==c & c==a){
    console.log('jednakostranican')
}else if (a<b & b<c & c>a){
    console.log('nejednakostranican')
}else{
    console.log('jednakokrak')
}

var q=4;
var w=5;
console.log(q+w);
console.log(q-w);
console.log(q*w);
console.log(q/w);


var bodovi= 80;
var ocenaA= 'A';
var ocenaB= 'B';
var ocenaC= 'C';
var ocenaD= 'D';
var ocenaE= 'E';
if (bodovi>91 && 100<bodovi){
    console.log('ocenaA')
}else if(bodovi>=81 && 90<=bodovi){
    console.log('ocenaB')
}else if(bodovi>=71 && 70<=bodovi){
    console.log('ocenaC')
}else if(bodovi>=61 && 60<=bodovi){
    console.log('ocenaD')
}else if(bodovi>=51 && 50<=bodovi){
    console.log('ocenaE')
}else{
    console.log('Pali ste')
};


var a = 4;
var b= 'macka';
if(b==='pas'){
if(a===1){
        console.log(a+ 'pas')
    }else{
        console.log(a+ 'psa')
    }
}else if (b=== 'macka'){
    if(a==1){
        console.log(a+ 'macka')
    }
    else{console.log(a+ 'macke')
}
}


var godine=11;
var razlika=18 - godine ;
if(godine>=18){
    console.log('doboljno sam star da vozim')
}else{
    console.log(razlika + 'godine do polaganja')
};


var godine =18;
var ja =28;
if(godine<ja){
    console.log('On/ona je' + (ja - godine) +'godina mladji/mladja od mene')
}else if (ja=godine){
    console.log("isto smo godiste")
}else{
    console.log('razlicito smo godiste')
}


var pas1= 'sibirski haski';
var pas2= 'zlatni retriver';
var pas3= 'nemacki ovcar';
var pas4= 'labrador';
var pas5= 'doga';
var pas6= 'labrador';
if(pas1==pas2 || pas1==pas3 || pas1==pas4 || pas1==pas5 || pas1==pas6){
    console.log('Ovo je '+ pas1)
}
else{
    console.log('ovo je mesanac')
}



