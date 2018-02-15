var $ = require('jquery')
    require('./renderer.js')

    var queryMinerInfo = "https://api.nanopool.org/v1/eth/user/0x3eAe075ac6ad7F86d28F657822a5e09767CfC961";
    var queryWorkerInfo = "https://api.nanopool.org/v1/eth/workers/0x3eAe075ac6ad7F86d28F657822a5e09767CfC961";
    var queryAvgEarnings = "https://api.nanopool.org/v1/eth/approximated_earnings/100";
    var queryEthPrice = "https://api.nanopool.org/v1/eth/prices";

    global.onload = function() {
      $.ajax({
        url: queryMinerInfo,
        method: 'GET'
      }).done(function (response) {
        var currentHashrate = response.data.hashrate;
        console.log(currentHashrate);
        $("#hashrate").text(currentHashrate);

        var dayHashrate = response.data.avgHashrate.h24;
        console.log(dayHashrate);
        $("#dayHashrate").text(dayHashrate);

        var unpaidBalance = response.data.balance;
        console.log(unpaidBalance);
        $("#balance").text(unpaidBalance);
      });

        $.ajax({
          url: queryWorkerInfo,
          method: 'GET'
        }).done(function (response) {
        console.log(response.data[0].id);
        console.log(response.data[1].id);
        console.log(response.data[2].id);
          var workers = response.data[0].id;
          $("#workers").text(workers);
        });

      $.ajax({
        url: queryAvgEarnings,
        method: 'GET'
      }).done(function (response) {
        var dailyEarnings = response.data.day.dollars;
        dailyEarnings = dailyEarnings.toFixed(2);
        $("#avgDailyEarn").text(dailyEarnings);
      });

      $.ajax({
        url: queryEthPrice,
        method: 'GET'
      }).done(function (response) {
        var ethPrice = response.data.price_usd;
        $("#ethPrice").text(ethPrice);
      });

    }