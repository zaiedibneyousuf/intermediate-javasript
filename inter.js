//falsy:
//0
//""
//undefined
//null
//NaN
//truthy:
//'0',' ',[],{}

const name = 0;

if(name || name ==0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}