import { WalletClientSigner, type SmartAccountSigner } from "@alchemy/aa-core";
import { AuthProvider } from "@arcana/auth";
import { createWalletClient, custom } from "viem";

// See https://docs.arcana.network/quick-start/vue-quick-start#step-3-integrate-app for further reference
const provider = new AuthProvider('xar_test_...');

await provider.init();
await provider.connect();

// This Viem wallet client wraps the Auth SDK EIP-1193 provider
export const arcanaAuthClient = createWalletClient({
  transport: custom(provider.provider),
});

// a smart account signer you can use as an owner on ISmartContractAccount
export const arcanaAuthSigner: SmartAccountSigner = new WalletClientSigner(
    arcanaAuthClient,
  "web3auth" // signerType
);
