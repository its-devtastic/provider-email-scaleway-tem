# Scaleway email provider for Strapi

An email provider for Strapi for [Scaleway Transactional Email](https://www.scaleway.com/en/betas/#tem-transactional-email).

## Installation
```shell
npm i strapi-provider-email-scaleway-tem
```

## Config

`./config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'strapi-provider-email-scaleway-tem',
      providerOptions: {
        accessKey: env('SCW_ACCESS_KEY'),
        secretKey: env('SCW_SECRET_KEY'),
        projectId: env('SCW_PROJECT_ID'),
        region: env('SCW_REGION'), // Defaults to 'fr-par'
      },
      settings: {
        defaultFrom: 'strapi@example.com',
      },
    },
  },
  // ...
});
```
