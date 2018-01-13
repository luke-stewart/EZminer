# EZminer

www.ezminer.io

This github repository structure is separated into 3 parts:

1. EZminerWeb, which is an html page that gives a user basic instructions on how to download the EZ Miner App, and how to set it up. It also contains an FAQ. Normally, this page will be a potential customer's landing page for using EZminer and may need to be tweaked for different markets. Ideally it should look polished and professsional, and have access to answers for customer's questions. 

2. EZminerApp, which configures the start.bat file from the user's input, shows simple profitability statistics, and launches the mining program itself.

3. EZminerServer, which handles all of the backend needs.

This company is targeting casual mining enthusiasts, such as video gamers who have high-end video cards, but would enjoy earning some extra money while sleeping or not playing video games. Also kids who enjoy technology, or parents involved in tech who want their kids to be exposed to cryptocurrenicies and or cutting edge tech.

Initially, the app will work with Ethereum, and later we will add ZCash, and others if it makes sense financially to add them.

We will use the genoil miner for now. (Current version of genoil is called ethminer, which was the original name. Genoil himself is not currently working on the miner, github user Chfast is.) Also will consider using the Dual Claymore miner if customers demand it, although the fees are higher using Claymore. Ideally we want a miner that charges 0 fees, for obvious reasons.

Currently using the nanopool ETH mining pool, as nanopool does not require account setup, and avoids other tedium like worker passwords and other things that make it more complicated for the beginner/casual miner. Nanopool fee is 1% and payouts default to .2 Eth. The payout threshold can be changed manually, we need to imlement a lower payout threshold as .2 ETH is too high for casual users. Ideally we want a pool that charges 0 fees. 

The mining program and mining pool should be nearly invisible to the end user, their entire experience should be through the EZ Miner App and Website.

We charge a 1%-2% mining fee for this service. In addition to the 1% that Nanopool charges, that is a net total of 2%-3% to the end user if we stay with nanopool and do not use the Claymore miner. 

How to charge the customer this fee is still undecided. The simplest way is to alter the start.bat file that runs the  miner using fs.writeFile. A more elegant solution is to fork ethminer, and hard code a percentage of hashpower toward our own Ethereum address, much like the Claymore miner does for himself. Miners are written in C++, so we may need to outsource this task.


