// default import
import * as User from './user.js';
console.log(User.user);
console.log(User.default)
// import React, {useState} from 'react'

//alert(User); // no such variable (each module has independent variables)
// document.body.innerHTML = user; // John
const john = new User.default(User.user);
console.log(john);
