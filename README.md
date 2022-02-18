# `Welcome to Nodal`

This project is using:

- [create-react-native-dapp](https://github.com/cawfree/create-react-native-dapp) to bootstrap the project.
- [WalletConnect v1 react-native integration](https://docs.walletconnect.com/1.0/quick-start/dapps/react-native) for authenthication (we use a slightly modiefied version, located in `./src/WalletConnect` to allow to modify the `enable` function of Moralis).
- [react-moralis](https://github.com/MoralisWeb3/react-moralis) for react hooks

There are many components in this boilerplate that do not require an active web3 provider, they use Moralis Web3 API. Moralis supports the most popular blockchains and their test networks. You can find a list of all available networks in [Moralis Supported Chains](https://docs.moralis.io/moralis-server/web3-sdk/intro#supported-chains)

Please check the [official documentation of Moralis](https://docs.moralis.io/#user) for all the functionalities of Moralis

# Quick Start

 Clone or fork `ethereum-react-native-boilerplate`:

```sh
git clone https://github.com/Nodal-io/Nodal.git
```

Install the expo CLI globally:

```sh
npm i -g expo-cli
```

Install all dependencies:

```sh
cd Nodal
yarn install
```

Run your App:

- IOS: 
-  For physical IOS Device: Open the `moraliscreatereactnativedapp.xcworkspace` from `ios` folder in Xcode. Run the App by choosing your connected physical device. 
-  Next navigate to Signing & Capabilities: Change team to Personal Team & set a custom Bundle Identifier
-  Build!
