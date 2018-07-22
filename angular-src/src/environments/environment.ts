// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase : {
        apiKey: "AIzaSyDNzK9wIBEWSOicgd0H7Kr-JDa-ZYIChNo",
        authDomain: "todolist-83cc8.firebaseapp.com",
        databaseURL: "https://todolist-83cc8.firebaseio.com",
        projectId: "todolist-83cc8",
        storageBucket: "todolist-83cc8.appspot.com",
        messagingSenderId: "416490403684"
    }
};
