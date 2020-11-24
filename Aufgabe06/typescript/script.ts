namespace Aufgabe06 {
    //Emissionswerte zuweisen
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


    // Augelagerte Berechnung
    //Gesamtemission
    const gesamt: number = europe2018 + northamerica2018 + southamerica2018 + africa2018 + asia2018 + australia2018;

    // Europa
    const totalEurope: number = (100 / (gesamt / europe2018));
    const PcomparisonEurope: number = (((europe2018 / europe2008) - 1) * 100);
    const compEurope: number = (europe2018 - europe2008);

    //Nordamerika
    const totalNorthamerica: number = (100 / (gesamt / northamerica2018));
    const PcomparisonNorthamerica: number = (((northamerica2018 / northamerica2008) - 1) * 100);
    const compNorthamerica: number = (northamerica2018 - northamerica2008);

    //Südamerika
    const totalSouthamerica: number = (100 / (gesamt / southamerica2018));
    const PcomparisonSouthamerica: number = (((southamerica2018 / southamerica2008) - 1) * 100);
    const compSouthamerica: number = (southamerica2018 - southamerica2008);

    //Afrika
    const totalAfrica: number = (100 / (gesamt / africa2018));
    const PcomparisonAfrica: number = (((africa2018 / africa2008) - 1) * 100);
    const compAfrica: number = (africa2018 - africa2008);

    //Asien
    const totalAsia: number = (100 / (gesamt / asia2018));
    const PcomparisonAsia: number = (((asia2018 / asia2008) - 1) * 100);
    const compAsia: number = (asia2018 - asia2008);

    //Australien
    const totalAustralia: number = (100 / (gesamt / australia2018));
    const PcomparisonAustralia: number = (((australia2018 / australia2008) - 1) * 100);
    const compAustralia: number = (australia2018 - australia2008);

    //HTML DOM Manipulation 
    //Europa
    function europe() {
        document.querySelector(".titleRegion").innerHTML = "Europe"; //Greift nicht auf alle class="titleRegion" Elemente zu: Was stimmt nicht?
        document.querySelector(".absoluteEmission").innerHTML = europe2018 + "kg CO2"; //Wenn kg CO2 weg ist, ist da ein Fehler, wieso?
        document.querySelector(".relativeEmission").innerHTML = totalEurope.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonEurope.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compEurope.toFixed(1) + "kg CO2";
        
        document.querySelector(".chart").setAttribute("style", "height:" + totalEurope + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".europe").addEventListener("click", europe);
    });

    //Nordamerika
    function northamerica() {
        document.querySelector(".titleRegion").innerHTML = "North America";
        document.querySelector(".absoluteEmission").innerHTML = northamerica2008 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalNorthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonNorthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compNorthamerica.toFixed(1) + "kg CO2";

        document.querySelector(".chart").setAttribute("style", "height:" + totalNorthamerica + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".northamerica").addEventListener("click", northamerica);
    });

    //Südamerika
    function southamerica() {
        document.querySelector(".titleRegion").innerHTML = "South America";
        document.querySelector(".absoluteEmission").innerHTML = southamerica2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalSouthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonSouthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compSouthamerica.toFixed(1) + "kg CO2";

        document.querySelector(".chart").setAttribute("style", "height:" + totalSouthamerica + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".southamerica").addEventListener("click", southamerica);
    });

    //Afrika
    function africa() {
        document.querySelector(".titleRegion").innerHTML = "Africa";
        document.querySelector(".absoluteEmission").innerHTML = africa2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalAfrica.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonAfrica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compAfrica.toFixed(1) + "kg CO2";

        document.querySelector(".chart").setAttribute("style", "height:" + totalAfrica + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".africa").addEventListener("click", africa);
    });

    //Asien
    function asia() {
        document.querySelector(".titleRegion").innerHTML = "Asia";
        document.querySelector(".absoluteEmission").innerHTML = asia2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalAsia.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonAfrica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compAsia.toFixed(1) + "kg CO2";

        document.querySelector(".chart").setAttribute("style", "height:" + totalAsia + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".asia").addEventListener("click", asia);
    });

    //Australien
    function australia() {
        document.querySelector(".titleRegion").innerHTML = "Australia";
        document.querySelector(".absoluteEmission").innerHTML = australia2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalAustralia.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonAustralia.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compAustralia.toFixed(1) + "kg CO2";

        document.querySelector(".chart").setAttribute("style", "height:" + totalAustralia + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".australia").addEventListener("click", australia);
    });

}