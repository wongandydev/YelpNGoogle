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

    callYelp(coordinates){
        var yelpURI = "https://api.foursquare.com/v2/venues/" +
            "search?ll=" + coordinates +
            "&client_id=" + config.FOURSQUARE_CLIENT_ID + "&" +
            "client_secret=" + config.FOURSQUARE_CLIENT_SECRET + "&" +
            "v=20180323&" +
            "query=" + this.state.query;

        let request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(this.responseText);

                document.getElementById("result").innerHTML = "";

                var t;
                for (t in response.response.venues){

                    var tableRow = document.createElement("tr");
                    var tableDetailName = document.createElement("td");
                    var tableDetailAddress = document.createElement("td");
                    var tableDetailDirection = document.createElement("td");
                    var buttonElement = document.createElement("button")
                    var name = document.createTextNode(response.response.venues[t].name);
                    var address = document.createTextNode(response.response.venues[t].location.formattedAddress);
                    var direction = document.createTextNode("Change Me");

                    buttonElement.addEventListener ("click", function() {
                        map = new google.maps.Map(document.getElementById('map'), {
                            center: {lat: latitude, lng: longitude},
                            zoom: 15
                        });

                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(40.7135097,-73.9859414),
                            map: map,
                            title: 'Hello World!'
                        });
                    });

                    buttonElement.appendChild(direction);

                    tableDetailName.appendChild(name);
                    tableDetailAddress.appendChild(address);
                    tableDetailDirection.appendChild(buttonElement);
                    // tableDetailAddress.appendChild(lineBreak);
                    // tableDetailAddress.appendChild(addressEnd);

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
        alert(zip_code);
        alert(mapsURI);
        event.preventDefault();

        var coordinates = document.getElementById("currentLocation").innerHTML;

        let request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(this.responseText);
                //setCoordinates(response.results[0].geometry.location.lat.toFixed(2), response.results[0].geometry.location.lng.toFixed(2));
                coordinates = response.results[0].geometry.location.lat.toFixed(2) + "," + response.results[0].geometry.location.lng.toFixed(2);
                document.getElementById("currentLocation").innerHTML = response.results[0].formatted_address;
                alert("after call" + response.results[0].formatted_address);
                window.setCurrentAddress(response.results[0].formatted_address);
            }
        }

        request.open("GET", mapsURI, false);
        request.send();

        this.callYelp(coordinates);
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


