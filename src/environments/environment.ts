// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI:"http://localhost:3000/",
    firebaseConfig: {
    apiKey: "AIzaSyCHbeW-AyaoNlQguL3OkLnH43nYRuoNIng",
    authDomain: "lojaangularjs.firebaseapp.com",
    databaseURL: "https://lojaangularjs.firebaseio.com",
    projectId: "lojaangularjs",
    storageBucket: "",
    messagingSenderId: "379291678301",
    appId: "1:379291678301:web:b4fdfd57b06106eb423fb4"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
