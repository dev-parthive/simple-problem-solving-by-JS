var color = '';

if(color === 'green'){
    console.log('Your are my green friend');
}else if( color ==='white'){
    console.log('You are my white friend ');
}else if( color === 'blue'){
    console.log('You are my Blue freind');
}else if( color === 'yellow'){
    console.log('You are my yellow freind');
}else{
    console.log('You are my nam na jana friend');
}

//switch


switch(color){
    case 'green':
        console.log('You are a green friend');
        break;
    case'blue':
        console.log('You are my Blue friend');
    case 'yellow':
        console.log('You are my Yellow friend');
        break;
    case 'white':
        console.log('You are my whtie friend');
        break;
    case 'red':
        console.log('Your are my red friend');
        break;
    default:
        console.log('You are my kala kala friend');
}