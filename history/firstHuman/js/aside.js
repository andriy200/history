let navItems = document.querySelectorAll('.navItem');
let navList = document.querySelectorAll('.navList');

// for(i = 0; i <= navItems.length; i++){
//     let navItem = navItems[i];
//     console.log(navItem)
//     navItem.addEventListener('click', function () {

//         if(navItem.classList.contains('active')){

//             navItem.classList.remove('active');

//         }else{

//             navItem.classList.add('active');

//         };
//     });
// };

navItems.forEach((item) =>

    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        navItems.forEach((check)=>
            check.classList.remove('active')
        );
        item.classList.add('active');

        document.getElementById(id).classList.add('active');
    })
);
