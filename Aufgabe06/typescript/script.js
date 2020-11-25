var Aufgabe06;
(function (Aufgabe06) {
    //Europa
    var europe2008 = 4965.7;
    var europe2018 = 4209.3;
    //Nordamerika
    var northamerica2008 = 6600.4;
    var northamerica2018 = 6036.6;
    //Südamerika
    var southamerica2008 = 1132.6;
    var southamerica2018 = 1261.5;
    //Afrika
    var africa2008 = 1028;
    var africa2018 = 1235.5;
    //Asien
    var asia2008 = 12954.7;
    var asia2018 = 16274.1;
    //Australien
    var australia2008 = 1993;
    var australia2018 = 2100.5;
    //Gesamtemission
    var gesamt = europe2018 + northamerica2018 + southamerica2018 + africa2018 + asia2018 + australia2018;
    //Funktion 
    function ChangeValue(continent, newValue, oldValue) {
        document.querySelector("#titleRegion").innerHTML = continent;
        document.querySelector("#titleRegion1").innerHTML = continent;
        document.querySelector("#absoluteEmission").innerHTML = newValue.toFixed(1) + "kg CO2";
        document.querySelector("#relativeEmission").innerHTML = (100 / (gesamt / newValue)).toFixed(1) + "%";
        document.querySelector("#growthEmission").innerHTML = (((newValue / oldValue) - 1) * 100).toFixed(1) + "%";
        document.querySelector("#growthEmissionAbs").innerHTML = (newValue - oldValue).toFixed(1) + "kg CO2";
        document.querySelector(".chart").setAttribute("style", "height:" + (100 / (gesamt / newValue)) + "%");
    }
    ;
    //EventListener
    document.querySelector("#europe").addEventListener("click", function () {
        ChangeValue("Europe", europe2018, europe2008);
    });
    document.querySelector("#northamerica").addEventListener("click", function () {
        ChangeValue("North America", northamerica2018, northamerica2008);
    });
    document.querySelector("#southamerica").addEventListener("click", function () {
        ChangeValue("South America", southamerica2018, southamerica2008);
    });
    document.querySelector("#africa").addEventListener("click", function () {
        ChangeValue("Africa", africa2018, africa2008);
    });
    document.querySelector("#asia").addEventListener("click", function () {
        ChangeValue("Asia", asia2018, asia2008);
    });
    document.querySelector("#australia").addEventListener("click", function () {
        ChangeValue("Australia", australia2018, australia2008);
    });
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map