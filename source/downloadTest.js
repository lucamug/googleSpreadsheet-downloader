"use strict";
let downloadGoogleSpreadsheet = require("./downloadGoogleSpreadsheet");
downloadGoogleSpreadsheet("1Wl4MriZ-4HM_DmXWxHyH7Xt2VKoRPK3RfCji_KhFa7U", (data) => {
    console.log(JSON.stringify(data, null, "\t"));
});
