window.addEventListener("load", function () {
    let script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = `
    {
        "width": "100%",
        "height": "100%",
        "symbolsGroups": [
            {
                "name": "Watch List",
                "symbols": [
                    { "name": "COMEX:GC1!", "displayName": "Comex Gold" },
                    { "name": "OANDA:XAUUSD" },
                    { "name": "TVC:DXY" },
                    { "name": "TVC:US02Y" },
                    { "name": "PEPPERSTONE:USDIDR" }
                ]
            }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "colorTheme": "dark",
        "locale": "en",
        "backgroundColor": "#131722"
    }`;
    document.querySelector(".tradingview-widget-container").appendChild(script);
});
