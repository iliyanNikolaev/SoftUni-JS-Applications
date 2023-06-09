import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { showDetails } from "./views/details.js";
import { initialize } from "./router.js";
import { logout } from "./api/users.js"

document.querySelector('#views').remove();

const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/details': showDetails,
    '/create': showCreate,
    '/register': showRegister,
    '/logout': onLogout
}

const router = initialize(links);

//Start app in home view
router.goto('/');
router.updateNav();


async function onLogout(){
    await logout();
    router.updateNav();
    router.goto('/');
}

