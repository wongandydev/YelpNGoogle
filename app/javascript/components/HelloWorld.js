import React from "react";
import $ from 'jquery';
// import PropTypes from "prop-types"

class HelloWorld extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            zip_code: '',
            query: ''
        };

        this.handleSearchBar = this.handleSearchBar.bind(this);
        this.handleZipSearchBar = this.handleZipSearchBar.bind(this);
        this.searchToCoords = this.searchToCoords.bind(this);
    }

    handleZipSearchBar(event){
        this.setState({zip_code: event.target.value});
        window.setCurrentAddress(event.target.value);
    }

    handleSearchBar(event){
        this.setState({query: event.target.value});
    }

    callYelp(lat, lng){
        var yelpURI = "https://api.foursquare.com/v2/venues/" +
            "search?ll=" + lat + "," + lng+
            "&client_id=" + config.FOURSQUARE_CLIENT_ID + "&" +
            "client_secret=" + config.FOURSQUARE_CLIENT_SECRET + "&" +
            "v=20180323&" +
            "query=" + this.state.query;

        let request = new XMLHttpRequest();

        function setMap(lat,lng) {
            alert(JSON.stringify(lat));
            alert(lat + " " + lng);
            // return function () {
            //     map = new google.maps.Map(document.getElementById('map'), {
            //         center: {lat: lat, lng: lng},
            //         zoom: 15
            //     });
            //
            //     var marker = new google.maps.Marker({
            //         position: new google.maps.LatLng(lat, lng),
            //         map: map
            //     });
            // }
        }

        request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(this.responseText);

                document.getElementById("result").innerHTML = "";

                var t;
                for (t in response.response.venues){

                    var tableRow = document.createElement("tr");

                    var tableDetailName = document.createElement("td");
                    tableDetailName.id = "name_cell";
                    tableDetailName.onclick = function(){
                        alert("click row");
                    }
                    var tableDetailAddress = document.createElement("td");
                    var tableDetailDirection = document.createElement("td");

                    var buttonElement = document.createElement("a");

                    var name = document.createTextNode(response.response.venues[t].name);
                    var address = document.createTextNode(response.response.venues[t].location.formattedAddress);
                    var linkText = document.createTextNode("Bring Me Here!");

                    var lat1 = response.response.venues[t].location.lat;
                    var lng1 = response.response.venues[t].location.lng;


                    buttonElement.href = "https://www.google.com/maps/dir/?api=1&origin=" +
                        lat+","+lng +
                        "&destination=" +
                        response.response.venues[t].name;

                    buttonElement.target = "_blank"

                    //
                    // buttonElement.onclick = function(latt, lngg) {
                    //     return setMap(latt, lngg);
                    // };

                    buttonElement.appendChild(linkText);

                    tableDetailName.appendChild(name);
                    tableDetailAddress.appendChild(address);
                    tableDetailDirection.appendChild(buttonElement);
                    tableDetailDirection.id = "go_here_column"

                    tableRow.appendChild(tableDetailName);
                    tableRow.appendChild(tableDetailAddress);
                    tableRow.appendChild(tableDetailDirection);

                    document.getElementById("result").appendChild(tableRow);
                }
            }
        }

        request.open("GET", yelpURI, true);
        request.send();
    }

    searchToCoords(event){
        var zip_code = window.getCurrentAddress();

        var mapsURI = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip_code +
            "&key=" + config.GOOGLE_KEY;

        event.preventDefault();

        var lat = document.getElementById("currentLocation").innerHTML;
        var lng = "";

        let request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(this.responseText);
                //setCoordinates(response.results[0].geometry.location.lat.toFixed(2), response.results[0].geometry.location.lng.toFixed(2));
                lat = response.results[0].geometry.location.lat;
                lng = response.results[0].geometry.location.lng;
                document.getElementById("currentLocation").innerHTML = response.results[0].formatted_address;

                window.setCurrentAddress(response.results[0].formatted_address);
            }
        }

        request.open("GET", mapsURI, false);
        request.send();

        this.callYelp(lat,lng);
    }

    render() {
        return (
            <div>
                <h1 id="center">
                    The Yelp + Maps Tool
                </h1>
                <form>
                    <label>
                        What do you want to eat or do?
                        <br></br>
                        <input className="search_bar" placeholder="Search" type="text" onChange={this.handleSearchBar}/>
                        <input className="search_bar" placeholder="Address, City, or Zip Code" type="text" onChange={this.handleZipSearchBar}/>
                    </label>
                    <button className="primary-btn" onClick={this.searchToCoords}> Search </button>
                </form>
            </div>
        );
    }
}

export default HelloWorld


