# nkn-balance
Simple web app that returns your nkn portfolio balance when queried on port **8080**.

To configure your wallet, create on your host a directory **config** (e.g. /usr/local/config) that you map to the directory **/config** in the container.
Two files should be present in this directory:
- **wallet.json** which is your private NKN wallet JSON file
- **wallet_passwd.txt** which should contain your wallet password file.

To retrieve the balance, simply open your browser:
`http://<docker_container>:8080`
