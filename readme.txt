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
- Users with non-Chromium browser are adviced to temporarily disable the Flash plugin to keep the server from crashing.
- The Kancolle Server allows only up to 6 connections at a time which would be hoarded by the embedded HTTP requests.
- Any in-game requests during the asset loading to the server may lead to a catbomb, if the game ddn't crash altogether along with the plugin. It is recommended to close Kancolle while the pages are still loading.
- You may check your server name from the title screen or Admiral's status page and compare it to the server entry in Kancolle Wikia.
- Selecting the wrong server may cause unnecessary bloat to your browser cache, wasting, bandwidth, disk space and above all, your precious time.

Files to update for maintainers:
1. bgm.js contains bgm links, home and overworld bgms have static links, battle bgms may change versions.
2. equip.js have var containing total number of equips currently available.
3. interface.js contains array with interface file versions.
4. maps.js contain map links, event maps available may be added from time to time.
5. latest.js contain contains links that are needed urgently, such as new maps, bgms and kanmusu CGs.
6. raw.js contains api_mst_shipgraph from api_start2 call.
7. seasonalcg.js contains CG links for card library in an array.
8. servers.js contain Kancolle server links.
