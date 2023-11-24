---
outline: deep
head:
  - - meta
    - property: og:title
      content: Arcana Auth Integration Guide
  - - meta
    - name: description
      content: ...
  - - meta
    - property: og:description
      content: ...
  - - meta
    - name: twitter:title
      content: Arcana Auth Integration Guide
  - - meta
    - name: twitter:description
      content: ...
---

# Arcana Auth Integration Guide

To be filled in

To be filled in

# Integration

### Install the SDK

::: code-group

```bash [npm]
npm i -s @arcana/auth
```

```bash [yarn]
yarn add @arcana/auth
```

:::

### Create a SmartAccountSigner

Setting up the Arcana Auth SDK and creating a `SmartAccountSigner` is easy, see:

<<< @/snippets/arcana-auth.ts

### Use it with LightAccount

Let's see it in action with `aa-alchemy` and `LightSmartContractAccount` from `aa-accounts`:
::: code-group

```ts [example.ts]
import { AlchemyProvider } from "@alchemy/aa-alchemy";
import {
  LightSmartContractAccount,
  getDefaultLightAccountFactoryAddress,
} from "@alchemy/aa-accounts";
import { sepolia } from "viem/chains";
import { arcanaAuthSigner } from "./arcana-auth";

const chain = sepolia;

const provider = new AlchemyProvider({
  apiKey: "ALCHEMY_API_KEY",
  chain,
}).connect(
  (rpcClient) =>
    new LightSmartContractAccount({
      chain,
      owner: arcanaAuthSigner,
      factoryAddress: getDefaultLightAccountFactoryAddress(chain),
      rpcClient,
    })
);
```

<<< @/snippets/arcana-auth.ts

:::
