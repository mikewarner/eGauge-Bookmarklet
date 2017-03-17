# eGauge-Bookmarklet
JavaScript which is used to add functionality to any eGauge metering web interface. Specifically, this bookmarklet adds the ability to quickly view previous years' usage. This reduces the number of mouse clicks and number of steps to quickly view the different usage between years.

The following steps can be used to load this bookmarklet:
1. Manually create a bookmark and name it your choosing
2. For the URL field add the following: `javascript:var jsElm = document.createElement("script");jsElm.type = "application/javascript";jsElm.src = "https://s3-us-west-2.amazonaws.com/egauge-bookmarklet/eGaugeBookmarklet.js";document.body.appendChild(jsElm);`
3. Click on the newly created bookmark and note that the graph menu will open with the new menu item

Each time the page is reloaded, the bookmaeklet will need to be rerun.

**For the paranoid:** Copy the JavaScript source, minimize it, then for the URL field of the bookmark type `javascript:` and then paste the minimized code.

Once loaded, you should have a new menu item in the graph menu

![New menu item](https://s3-us-west-2.amazonaws.com/egauge-bookmarklet/new_menu_item.PNG)

**Note:** I'm statically using indexes to other elements, so if the web interface ever changes, those static references will need to be updated.



