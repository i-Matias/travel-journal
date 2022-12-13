import React from "react";

export default function Hero(props){

    return (
        <div className="card">
            <img className="destination" src={`${props.imageUrl}`} />
            <div className="card-info">
                <div className="location">
                    <p className="icon"><i className="fas fa-map-marker-alt"></i>{props.location.toUpperCase()}</p>
                    <a href={`${props.googleMapsUrl}`} target={"_blank"}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}