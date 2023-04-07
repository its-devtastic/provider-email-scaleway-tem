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
      provider: 'scaleway-tem',
      providerOptions: {
        accessKey: env('SCW_ACCESS_KEY'),
        secretKey: env('SCW_SECRET_KEY'),
        projectId: env('SCW_PROJECT_ID'),
      },
      settings: {
        defaultFrom: 'strapi@example.com',
      },
    },
  },
  // ...
});
```
