# CoinBase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Fuctionality and features

The application is based on various crypto trading platforms. It has a blog feature and transaction feature.
In order to have full access to the application you need to be authenticated.
Account credentials that can be used for the authentication:
Username: `hcleric`
Password: `111111`

### Blog feature

The blog feature consists of a page with the blog posts that has a short description of the posts and any images attached to them. Each post has a details page that has the full information about the post and a comment section. The comments are shown below the content of the post and can be read by any user but only an authenticated user can post one.
The owner/creator of every post can edit and delete its post. This functionality is available only for the author/creator.

### Transaction feature

The transaction feature consists of options to sell Giftcards and Crypto currency through the platform. Each transaction is recorded and can be seen in the Home page. This functionality is only available to the authenticated users.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
