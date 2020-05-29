// eslint-disable-next-line no-unused-vars
const inquirer = require('inquirer');
const MenuController = require('./controllers/MenuController');

const menu = new MenuController();

menu.clear();
menu.main();
