import * as api from './data/api.js';
import { register, login, logout } from './data/user.js';
import { createMovie, editMovie, getById, getAll } from './data/movie.js';
window.api = api;
window.register = register;
window.login = login;
window.logout = logout;
window.createMovie = createMovie;
window.editMovie = editMovie;
window.getById = getById;
window.getAll = getAll;
