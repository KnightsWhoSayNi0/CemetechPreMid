const presence = new Presence({
  clientId: "829371771702345759" 
})

var browsingStamp = Math.floor(Date.now() / 1000);
var title: any;

presence.on("UpdateData", async () => {
  
  const presenceData: PresenceData = {
    largeImageKey:
      "icon"
  }; 

  if (document.location.pathname == "/") {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing home page";
    presenceData.state = "";
  } else if (document.location.pathname == "/projects/tisaxclient.php") {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Chatting in SAX";
    presenceData.state = "";
  } else if (document.location.pathname == "/forum/") {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Browsing Forum Index";
    presenceData.state = "";
  } else if (document.location.pathname.includes("/forum/viewtopic")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing Topic:";
    title = document.querySelector(
      "#page_content_parent > div.mainheadmiddle.roundedtop > a"
    );
    presenceData.state = title.innerText;
  } else if (document.location.pathname == "/sc/") {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Using SourceCoder3";
    title = document.querySelector(
      "#prog_name"
    );
    presenceData.state = "Editing: " + title.value;
  } else if (document.location.pathname == "/projects/jstified/") {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Using jsTIfied";
    presenceData.state = "";
  } else if (document.location.pathname.includes("/search.php")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Searching for:";
    title = document.querySelector(
      "#navsearchform > input.navsearchinput"
    );
    presenceData.state = title.value;
  } else if (document.location.pathname == "/downloads/") {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Browsing Archive Index";
    presenceData.state = "";
  } else if (document.location.pathname.includes("/downloads/browse")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Browsing Archives";
    presenceData.state = "";
  } else if (document.location.pathname.includes("/downloads/files")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing File";
    title = document.querySelector(
      "#page_content_parent > div > div.mainheadmiddle.roundedtop > span"
    );
    presenceData.state = title.innerText;
  }

  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }
});