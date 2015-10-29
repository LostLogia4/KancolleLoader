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

Notes: 
- The Kancolle Server allows only up to 6 connections at a time which would be hoarded by the embedded HTTP requests.
- Any in-game requests to the server may lead to a catbomb. It is recommended to close Kancolle while the pages are still loading.
- You may check your server name from the title screen or Admiral's status page and compare it to the server entry in Kancolle Wikia.
- Selecting the wrong server may cause unnecessary bloat to your browser cache, wasting, bandwidth, disk space and above all, your precious time.
