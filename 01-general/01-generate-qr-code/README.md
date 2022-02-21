# Generate QR Code

The goal for this prototype is to generate a QR code that represents the account address for a wallet. I want to be able to use my MetaMask wallet to scan the QR code and send test money to.

## Library

We want a React QR Code generator that is really simple to use. I found [qrcode.react](https://github.com/zpao/qrcode.react). Using this is as simple as adding the library and calling:

```
<QRCode value={walletAddress} />
```

## Thoughts

This worked as expected and has a ton of settings if we need to configure it more in the future. We should definitely use this.
