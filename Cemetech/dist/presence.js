const presence = new Presence({
    clientId: "829371771702345759"
});
var browsingStamp = Math.floor(Date.now() / 1000);
var title;
presence.on("UpdateData", async () => {
    const presenceData = {
        largeImageKey: "icon",
        smallImageKey: "icon",
        smallImageText: "Cemetech.net",
        startTimestamp: 1577232000,
        endTimestamp: 1577151472000
    };
    if (document.location.hostname == "cemetech.net") {
        if (document.location.pathname == "/") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing home page";
            presenceData.state = "";
        }
        if (document.location.pathname == "/projects/tisaxclient.php") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Chatting in SAX";
            presenceData.state = "";
        }
        if (document.location.pathname == "/forum/") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Browsing Forum Index";
            presenceData.state = "";
        }
        if (document.location.pathname.includes("/forum/viewtopic")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Looking at page:";
            title = document.querySelector("#page_content_parent > div.mainheadmiddle.roundedtop > a");
            presenceData.state = title;
        }
    }
    if (presenceData.details == null) {
        presence.setTrayTitle();
        presence.setActivity();
    }
    else {
        presence.setActivity(presenceData);
    }
});
