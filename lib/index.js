"use strict";

const { createClient, TransactionalEmail } = require("@scaleway/sdk");

module.exports = {
  provider: "scaleway-tem",
  name: "Scaleway TEM",

  init: function (providerOptions, settings) {
    const client = createClient({
      accessKey: providerOptions.accessKey,
      secretKey: providerOptions.secretKey,
      defaultProjectId: providerOptions.projectId,
    });

    const tem = new TransactionalEmail.v1alpha1.API(client);

    return {
      send: function (options) {
        const { from, to, cc, bcc, subject, text, html } = options;

        const data = {
          from: {
            email: from || settings.defaultFrom,
          },
          to: to ? [{ email: to }] : [],
          cc: cc ? [{ email: cc }] : [],
          bcc: bcc ? [{ email: bcc }] : [],
          subject,
          text,
          html,
          projectId: providerOptions.projectId,
          region: providerOptions.region || "fr-par",
        };

        return tem.createEmail(data);
      },
    };
  },
};
