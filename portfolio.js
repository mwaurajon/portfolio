// const btn = document.querySelector('btn');
// const skills = document.querySelector('Skils');

//     btn.addEventListener('click', () => {
//       if (skills.style.display === 'none') {
//         rules.style.display = 'block';
//       } else {
//         skills.style.display = 'none';
//       }
//     });
    let tablinks=document.getElementsByClassName('tab-links')
    let tabcontents=document.getElementsByClassName('tab-contents')
    let sidemenu=document.querySelector('sidemenu')
    function opentab(tabname){
        for(tablinks of tablinks){
            tablinks.classList.remove('active-link');
        }
        for(tabcontents of tabcontents){
            tabcontents.classList.remove('active-tab');
        }
        event.currentTarget.classList.add('active-link');
        document.getElementById(tabname).classList.add('active-tab')
    }

    func