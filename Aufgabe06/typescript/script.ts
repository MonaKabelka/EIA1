namespace Aufgabe06 {
    //Europa
    const europe2008: number = 4965.7;
    const europe2018: number = 4209.3;
    //Nordamerika
    const northamerica2008: number = 6600.4;
    const northamerica2018: number = 6036.6;
    //Südamerika
    const southamerica2008: number = 1132.6;
    const southamerica2018: number = 1261.5;
    //Afrika
    const africa2008: number = 1028;
    const africa2018: number = 1235.5;
    //Asien
    const asia2008: number = 12954.7;
    const asia2018: number = 16274.1;
    //Australien
    const australia2008: number = 1993;
    const australia2018: number = 2100.5;
    //Gesamtemission
    const gesamt: number = europe2018 + northamerica2018 + southamerica2018 + africa2018 + asia2018 + australia2018;

    //Funktion 
    function ChangeValue(continent: string, newValue: number, oldValue: number) {
        document.querySelector("#titleRegion").innerHTML = continent;
        document.querySelector("#titleRegion1").innerHTML = continent;
        document.querySelector("#absoluteEmission").innerHTML = newValue.toFixed(1) + "kg CO²";
        document.querySelector("#relativeEmission").innerHTML = (100 / (gesamt / newValue)).toFixed(1) + "%";
        document.querySelector("#growthEmission").innerHTML = (((newValue / oldValue) - 1) * 100).toFixed(1) + "%";
        document.querySelector("#growthEmissionAbs").innerHTML = (newValue - oldValue).toFixed(1) + "kg CO²";

        document.querySelector(".chart").setAttribute("style", "width:" + (100 / (gesamt / newValue)) + "%");
    };

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
}