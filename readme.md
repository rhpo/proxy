# rhpo - Proxy
It's a side-project that lets you host an express app acting as a **tunnel** (kind of *[Reverse-proxy](https://en.wikipedia.org/wiki/Reverse_proxy)*) to the cloud...

## How it works?
It uses the [http-proxy-middleware NPM library](https://www.npmjs.com/package/http-proxy-middleware) to make this possible.

## CONFIGURATION - .env

TARGET :  The target url (with or without root slash /)
PORT   :  The port used to host that proxy (generally & by default 8080) 