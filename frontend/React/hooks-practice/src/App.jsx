import { useState } from 'react';
import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap
} from 'react-leaflet';

import './App.css'

// Main function to init markers list and render the components
export default function App() {

  // Tracking of the marker's list
  const [markers, setMarkers] = useState([
    {
      id: 1,
      name: 'Tulua',
      coordinates: [4.073579856688821, -76.19267984380872]
    }
  ])

  return (
    <div className='main-container'>
      <MapContainer center={[4.074862, -76.192516]} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          markers.map(marker => (
            <Marker
              key={marker.id}
              position={[marker.coordinates[0], marker.coordinates[1]]}
            />
          ))
        }
      </MapContainer>
      <div className="markers-container">
        <h1>Markers list</h1>
        {/* Pass markers list to render it */}
        <ShowMarkersList markers={markers} />
        {/* Pass its state updater function */}
        <AddMarker setMarkers={setMarkers} />
      </div>
    </div>
  )
}

// Component that print the markers list
function ShowMarkersList({ markers }) {
  // Destructuring {} ^^^
  return (
    <ul>
      {
        markers.map(marker => (
          <li key={marker.id}>
            {marker.name} - {`X: ${marker.coordinates[0]} / Y: ${marker.coordinates[1]}`}
          </li>
        ))
      }
    </ul>
  )
}

// Component to add markers to the list
function AddMarker({ setMarkers }) {
  function handleAddMarker(event) {
    event.preventDefault();

    // Get value from input
    let markerInfo = event.target.elements.addToDo.value
    console.log(markerInfo)

    // Verify if it's empty
    if (markerInfo) {

      // Separate marker's name and coordinates 
      markerInfo = markerInfo.split(';')
      setMarkers(previousState => {

        // Create a new marker from the input
        const newMarker = {
          id: previousState.length + 1,
          name: markerInfo[1],
          coordinates: [Number(markerInfo[0].split(',')[0]), Number(markerInfo[0].split(',')[1])]
        }
        return [...previousState, newMarker]
      })
    }

    // Reset the content of the input
    event.target.elements.addToDo.value = ""
  }

  return (
    <>
      {/* Input and button to add markers */}
      <form onSubmit={handleAddMarker}>
        <input placeholder='Add marker' name='addToDo' />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
