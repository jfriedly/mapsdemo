var map;

function toggleSet(set) {
    if (set[0].map) {
        console.log("setting maps to null");
        for(i in set) {
            set[i].setMap(null);
        }
    } else {
        console.log("setting maps to map");
        for(i in set) {
            set[i].setMap(map);
        }
    }
}
    
function mapInitialize() {
    var latlng = new google.maps.LatLng(40.82, -96.68); //40.82N, 96.68W
    var myOptions = {
        zoom: 4,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var blueIcon = 'bluesmall.png';

    monuments = [];
    techGiants = [];
    function createMarker(lat, lng, title, set, icon) {
        latlng = new google.maps.LatLng(lat, lng);
        marker = new google.maps.Marker({
            position: latlng,
            title: title,
        });
        if (typeof icon !== 'undefined') {
            marker.setIcon(icon);
        }
        set.push(marker);
        return marker;
    }

    var statueOfLiberty = createMarker(40.69, -74.04, "Statue of Liberty", monuments, blueIcon);
    var mtRushmore = createMarker(43.88, -103.46, "Mt. Rushmore", monuments, blueIcon);
    var washingtonMonument = createMarker(38.89, -77.03, "Washington Monument", monuments, blueIcon);

    var googleHQ = createMarker(37.43, -122.08, "Google", techGiants);
    var apple = createMarker(37.34, -121.99, "Apple", techGiants);
    var ibm = createMarker(41.12, -73.72, "IBM", techGiants);
    var microsoft = createMarker(47.64, -122.13, "Microsoft", techGiants);

    toggleSet(monuments);
    toggleSet(techGiants);

    var monumentsCheckbox = document.getElementById("monumentsCheckbox");
    var techGiantsCheckbox = document.getElementById("techGiantsCheckbox");
    
    monumentsCheckbox.addEventListener('click', function(){toggleSet(monuments)}, false);
    techGiantsCheckbox.addEventListener('click', function(){toggleSet(techGiants)}, true);
}

