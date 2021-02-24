  var pm2 = require('pm2');

  pm2.connect(function(err) {
    if (err) throw err;

  setTimeout(function worker() {
    console.log("Restarting app...");
    pm2.restart('ticker', function() {});
    setTimeout(worker, 30000);
    }, 30000);
  });
