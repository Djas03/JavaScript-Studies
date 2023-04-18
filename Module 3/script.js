var p = document.getElementsByTagName('p');

//p[0].innerHTML = 'Manipuling this tag';


for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + ' ' + i;
}