# pcc.im

pcc.im is a service to showcase public ens profiles. it is built by [curatorcat.pcc.im](https://pcc.im/curatorcat) for fun, and it is not affiliated with purrnelope's country club project.

this is the repo for https://pcc.im

## .env

```
# true to use WS RPC, else to use http RPC
USE_WEBSOCKET=true

# will use default key by ethers.js if empty
INFURA_KEY=
```

using websocket makes the query much faster.

however, ethers.js's provider doesn't have full websocket control features, and I'm not really familliar with websocket. infura won't reopen connection once ws is closed from by the client, I did a hack to reload the page to re-establish connection to ws. this needs help for better solution.

## local dev

