// 📁 auth/index.js

// import login/logout and immediately export them
import { login, logout } from './helpers.js';

// import default as User and export it
import User from './user.js';

export { login, logout };
export { User };

// 📁 auth/index.js
// import login/logout and immediately export them
export {login, logout} from './helpers.js';

// import default as User and export it
export { default as User } from './user.js';

export * from './user.js'; // to re-export named exports
export {default} from './user.js'; // to re-export the default export