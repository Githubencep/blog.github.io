<amp-script layout="container" script="inline_amp" class="amp-script-sample"> <script src="https://apis.google.com/js/plusone.js" type="text/javascript"></script>
<div id="followers-iframe-container"></div> </amp-script> <script id="inline_amp" type="text/javascript" target="amp-script">   window.followersIframe = null; function followersIframeOpen(url) { gapi.load("gapi.iframes", function() { if (gapi.iframes && gapi.iframes.getContext) { window.followersIframe = gapi.iframes.getContext().openChild({ url: url, where: document.getElementById("followers-iframe-container"), messageHandlersFilter: gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER, messageHandlers: { '_ready': function(obj) { window.followersIframe.getIframeEl().height = obj.height; }, 'reset': function() { window.followersIframe.close(); followersIframeOpen("https://www.blogger.com/followers.g?blogID\x3d336601357570051442\x26colors\x3dCgt0cmFuc3BhcmVudBILdHJhbnNwYXJlbnQaByMwMDAwMDAiByMwMDAwMDAqByNGRkZGRkYyByMwMDAwMDA6ByMwMDAwMDBCByMwMDAwMDBKByMwMDAwMDBSByNGRkZGRkZaC3RyYW5zcGFyZW50\x26pageSize\x3d21\x26origin\x3dhttps://demoblogamp.blogspot.com/"); }, 'open': function(url) { window.followersIframe.close(); followersIframeOpen(url); }, 'blogger-ping': function() { } } }); } }); } followersIframeOpen("https://www.blogger.com/followers.g?blogID\x3d336601357570051442\x26colors\x3dCgt0cmFuc3BhcmVudBILdHJhbnNwYXJlbnQaByMwMDAwMDAiByMwMDAwMDAqByNGRkZGRkYyByMwMDAwMDA6ByMwMDAwMDBCByMwMDAwMDBKByMwMDAwMDBSByNGRkZGRkZaC3RyYW5zcGFyZW50\x26pageSize\x3d21\x26origin\x3dhttps://demoblogamp.blogspot.com/"); </script>

<div id="followers-iframe-container"></div>


