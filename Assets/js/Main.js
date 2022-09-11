// AÇÃO SCROLL DOWN
const btnScroll = document.querySelector('#btnScroll')

btnScroll.addEventListener('click', () => {
    window.scroll({top: window.innerHeight})
});

// AÇÃO ALTERAR EXPERIÊNCIAS

const btnExp01 = document.querySelector('#exp01');
const btnExp02 = document.querySelector('#exp02');

btnExp01.addEventListener('click', () => {
    handleDisplay('#expDesc01', '#expDesc02')
});

btnExp02.addEventListener('click', () => {
    handleDisplay('#expDesc02', '#expDesc01')
});


function handleDisplay(objOnID, objOffId){
    var divOn = document.querySelector(objOnID);
    var divOff = document.querySelector(objOffId);
    
    if(objOnID == '#expDesc01'){
        btnExp02.classList.remove('active')
        divOff.classList.add('d-none')

        btnExp01.classList.add('active')
        divOn.classList.remove('d-none')
    }else{
        btnExp01.classList.remove('active')
        divOff.classList.add('d-none')

        btnExp02.classList.add('active')
        divOn.classList.remove('d-none')
    }
}