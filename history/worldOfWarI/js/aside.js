let navItems = document.querySelectorAll('.navItem');
let navList = document.querySelectorAll('.navList');
let text = document.querySelectorAll('.text');

navItems.forEach((item) =>

    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        navItems.forEach((check) =>
            check.classList.remove('active')
        );
        text.forEach((check) =>
            check.classList.remove('show')
        );


        item.classList.add('active');

        document.getElementById(id).classList.add('show');
    })
);
