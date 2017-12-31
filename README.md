# EZminer

www.ezminer.io

This github repository structure is separated into 3 parts:

1. EZminerWeb, which is an html page that gives a user basic instructions on how to download the EZ Miner App, and how to set it up. It also contains an FAQ.

2. EZminerApp, which configures the start.bat file from the user's input, shows simple profitability statistics, and launches the mining program itself.

3. EZminerServer, which handles all of the backend needs.

This company is targeting casual mining enthusiasts, such as video gamers who have high-end video cards, but would enjoy earning some extra money while sleeping or not playing video games. Also kids who enjoy technology, or parents involved in tech who want their kids to be exposed to cryptocurrenicies.

Initially, the app will work with Ethereum, and later we will add ZCash, and others if it makes sense financially to add them.

We will use the genoil miner for now. Also will consider using the Dual Claymore miner if customers demand it, although the fees are higher using Claymore.

We will use the nanopool ETH mining pool, as nanopool does not require account setup, and avoids other tedium like worker passwords and other things that make it more complicated for the beginner/casual miner.

The mining program and mining pool should be nearly invisible to the end user, their entire experience should be through the EZ Miner App and Website.

We charge a 1% mining fee for this service. In addition to the 1% that Nanopool charges, that is a net total of 2% to the end user. How to charge the fee is still undecided. The simplest way is to alter the start.bat file or json file that runs the genoil miner (I forget which one), but this is easily changed by tech-savvy users. A better, long-term solution is to fork the genoil miner (or other miner), and hard code a percentage of hashpower toward our own Ethereum address, much like the Claymore miner does for himself. Miners are written in C++, so we may need to outsource this task.


