function performCommand(event)
{
    if (event.command === "sixfy") 
    {
        var currentURL = event.target.browserWindow.activeTab.url;
        if (currentURL)
        {
            var url = currentURL.split('/');
//            alert(url);
            var newUrl = url[0] + "//" + url[2] + ".sixxs.org";
            var i = 3;
            while( url[i] )
            {
                newUrl = newUrl + '/' + url[i];
                i += 1;
            }
//            alert(newUrl);

            event.target.browserWindow.activeTab.url = newUrl;
        }
    }
}

safari.application.addEventListener("command", performCommand, false);
