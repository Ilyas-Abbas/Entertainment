let toggleNavStatus = false;


let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUI = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
    
    if(toggleNavStatus === true){
        getSidebarUI.computedStyleMap.sidebar = sidebar.open;
    }
}





