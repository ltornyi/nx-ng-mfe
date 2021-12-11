# NxNgMfe

This project is an microfrontend PoC, based on this [guide](https://nx.dev/l/a/guides/setup-mfe-with-angular).

## Environtment

node@16, @angular/cli@13, nx@13

## First steps

    npx create-nx-workspace nx-ng-mfe
    
Used the 'empty' preset.

    cd nx-ng-mfe
    npm install --save-dev @nrwl/angular

## Creating two apps

We create two applications; one will act as the 'host', the other will act as the 'remote'. The remote mfeType creates a webpack configuration that is ready to be consumed by the host via module federation.


  npx nx g @nrwl/angular:app host --mfe --mfeType=host --routing=true
  npx nx g @nrwl/angular:app remote1 --mfe --mfeType=remote --port=4201 --host=host --routing=true

## Running the remote app

  nx run remote1:serve

NX bug: webpack is not installed. Manual solution:

  npm install --save-dev webpack
  npm install --save-dev webpack-dev-server

## Modify the remote app to render the entry component

Add the following route definition to the `app.module.ts` of the remote app:

    {path:'', loadChildren: () => import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule)}

Fix the scaffolded entry module - the original imports BrowserModule, replace it with CommonModule. Also remote the NX welcome component from the app component template (so only router outlet remains).

  nx run remote1:serve

Now it will display the remote entry component because of the routing.

## Run the host app

  nx run host:serve

Because of a webpack bug the host application keeps reloading, temporary fix is here https://github.com/angular-architects/module-federation-plugin/issues/96

  nx run remote1:serve --liveReload=false
  nx run host:serve --liveReload=false

When you navigate to the /remote1 route, the remote application will be consumed. You can simply build and run both microfrontends by

  nx run host:serve-mfe --liveReload=false

## Styling issues

Style defined on the global stylesheet of the remote are not served when the host consumes the remote. See solution/workaround here: https://stackoverflow.com/questions/67633345/serving-styles-and-assets-with-webpack-5-module-federation





