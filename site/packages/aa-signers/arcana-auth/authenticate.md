---
outline: deep
head:
  - - meta
    - property: og:title
      content: ArcanaAuthSigner • authenticate
  - - meta
    - name: description
      content: Overview of the authenticate method on ArcanaAuthSigner
  - - meta
    - property: og:description
      content: Overview of the authenticate method on ArcanaAuthSigner
---

# authenticate

`authenticate` is a method on the `ArcanaAuthSigner` which leverages the `Arcana Auth` web SDK to authenticate a user.

This method must be called before accessing the other methods available on the `ArcanaAuthSigner`, such as signing messages or typed data or accessing user details.

## Usage

::: code-group

```ts [example.ts]
// [!code focus:99]
import { ArcanaAuthSigner } from "@alchemy/aa-signers";
// Register app through Arcana Developer Dashboard to get clientId
// ARCANA_AUTH_CLIENTID = "xar_live_nnnnnnnnnn"
const newArcanaAuthSigner = new ArcanaAuthSigner({ clientId: ARCANA_AUTH_CLIENTID });
await newArcanaAuthSigner.authenticate({
    init () {
        return newArcanaAuthSigner.inner.init();
    },
    connect () {
        return newArcanaAuthSigner.inner.connect();
    },
});
```

:::

## Returns

### `Promise<UserInfo>`

A Promise containing the `UserInfo`, an object with the following fields:

- `address: string | null` -- the EoA account address associated with the authenticated user's wallet.
- `email: string | null` -- email address of the authenticated user.
- `id: string | null` -- the decentralized user identifier.
- `loginToken: string` -- JWT token returned after the user authenticates.
- `loginType: Logins | passwordless` -- login provider type or passwordless used for authentication (ex. `[{ Logins: "google" | "github" | "discord" | "twitch" | "twitter" | "aws" | "firebase" | "steam" }]`).
- `name: string` -- user name associated with the email id
- `picture: string` -- url pointing to the user profile image
- `publicKey: string` -- public key associated with the user account

See [Arcana Auth SDK Reference Guide](https://authsdk-ref-guide.netlify.app/interfaces/userinfo) for details.

## Parameters

### `authParams: <ArcanaAuthAuthenticationParams>`

An object with the following fields:

- `init: () => Promise<void>` -- a method you can define as necessary to leverage the `Arcana Auth` SDK for initialization of the SDK. For instance, in the example above, `authenticate` uses the [`init`](https://authsdk-ref-guide.netlify.app/classes/authprovider#init) method.
- `connect: () => Promise<void>` -- a method you can define as necessary to leverage the `Arcana Auth` SDK for authentication. For instance, in the example above, `authenticate` uses the [`connect`](https://authsdk-ref-guide.netlify.app/classes/authprovider#connect) method.
