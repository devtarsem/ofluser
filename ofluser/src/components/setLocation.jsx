import './../styles/setLoc.css'
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
const MAPBOX_TOKEN = "pk.eyJ1IjoidGFyc2VtY29kZXIiLCJhIjoiY202dHIyNG51MDVqNjJrc2M5aWI4eWtwZSJ9.9U90FjQDDiVZ61NAYJTLFw"; // Replace with your token
import { useEffect, useState , useRef} from 'react';

function SetLocation(){


    const mapContainerRef = useRef(null);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      // Get the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userCoords);
          initializeMap(userCoords);
        },
        (error) => {
          console.error("Error getting location: ", error);
          // You can provide a fallback here in case the user denies location access
          const fallbackCoords = { lat: 31.3255, lng: 75.5762 }; // Default to Jalandhar
          setUserLocation(fallbackCoords);
          initializeMap(fallbackCoords);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      const fallbackCoords = { lat: 31.3255, lng: 75.5762 }; // Default to Jalandhar
      setUserLocation(fallbackCoords);
      initializeMap(fallbackCoords);
    }

    // Initialize the map with the provided coordinates
    mapboxgl.accessToken = MAPBOX_TOKEN;
    function initializeMap(coords) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current, // The map container element
        style: "mapbox://styles/mapbox/streets-v11", // Map style
        center: [coords.lng, coords.lat], // Center map on user's location
        zoom: 12, // Initial zoom level
      });

      // Add a draggable marker
      const marker = new mapboxgl.Marker({ draggable: true })
        .setLngLat([coords.lng, coords.lat]) // Set the initial marker position
        .addTo(map);

      // Listen for when the user drags the marker
      marker.on('dragend', () => {
        const lngLat = marker.getLngLat();
        console.log(`New location: ${lngLat.lat}, ${lngLat.lng}`);
        setUserLocation({ lat: lngLat.lat, lng: lngLat.lng });
      });

    //   Add navigation controls (optional)
       const geocoder = new MapboxGeocoder({
        accessToken: MAPBOX_TOKEN, // Set your Mapbox access token
        mapboxgl: mapboxgl, // Pass the Mapbox GL instance
        draggable : true,
        
        marker: true, // Do not display a marker by default on search results
      });
      map.addControl(geocoder, 'top-left');




      
    }

    // Cleanup on unmount
    return () => {
      if (mapContainerRef.current) {
        const map = mapContainerRef.current._map;
        if (map) map.remove();
      }
    };
  }, []);

    return(
        <div className="loc">
            <div className='locmap'>
                <div ref={mapContainerRef} className='locmap' />
            </div>
        </div>
    )
}


export default SetLocation;