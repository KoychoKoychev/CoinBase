// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://parseapi.back4app.com',
  requestHeaders: {
    "X-Parse-Application-Id": "DrLUWya6WmD9ni2YZ2Yi1dXzGraaQiyEArZT7oop",
    "X-Parse-REST-API-Key": "Oquz726iAu0T1Gfyrjduh6d6diipGKs10g16yAvU",
    "X-Parse-Revocable-Session": "1",
    "Content-Type": "application/json"
  },
  priceApiUrl: 'https://api.nomics.com/v1/currencies/ticker?key=c040ff1f61826b477b5c5510f9e0e2651f2b6c30&ids=BTC,ETH',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
