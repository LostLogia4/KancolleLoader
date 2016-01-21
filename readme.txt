# KancolleLoader
A pet project I started for prefetching the Kancolle game assets.
This is a simple project to cache the Kancolle game assets simply by prefetching it beforehand via invisible embeddings.

How to use:
1. Open the index file.
2. Select the server where your Kancolle account is located.
3. Press F12 to open the Developer's Tools.
4. Click on the Network Tab.
5. Select the Kancolle server that your account is located on.
6. Prepare a cup of coffee as the HTML file loads the game assets.

Notes for users: 
- The Kancolle Server allows only up to 6 connections at a time which would be hoarded by the embedded HTTP requests.
- Any in-game requests during the asset loading to the server will lead to a catbomb while loading. As such, players are strongly adviced not to click on anything in the game while the assets are loading.
- You may check your server name from the title screen or Admiral's status page and compare it to the server entry in Kancolle Wikia.
- Selecting the wrong server may cause unnecessary bloat to your browser cache, wasting, bandwidth, disk space and above all, your precious time. It is recommended to use incognito/private browsing mode to test the app.

Files to edit/update by users are located in data folder. Below are short descriptions:
01. bgm.js contains bgm links, home and overworld bgms have static links, battle bgms may change versions.
02. furniture.js contains furniture images. Animated flash files are not included by default.
03. interface.js contains game interface and resource asset links. *
04. item.js have var containing total number of equips currently available, as well as arrays that has list of items.
05. maps.js contain map links, event maps available may be added from time to time.
06. latest.js contain contains links that are needed urgently, such as new maps, bgms and kanmusu CGs. **
07. maintenance.js contains expiry date for CG links, as well as blacklisted ship IDs.
08. shipgraph.js contains api_mst_shipgraph from api_start2 call. *
09. servers.js contain Kancolle server links.

*  Considered as dynamic assets as they expires on every maintenance.
** Shelved as Dragonjet's website is now defunct
