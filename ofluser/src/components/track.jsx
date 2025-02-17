import './../styles/track.css'
import { useState, useEffect, useRef} from 'react';
import cross from './../icon/remove.png'
import accept from './../icon/accept.png'
import { useParams } from 'react-router';
import { TrackedItemCreator } from '../slices/productslice';
import { useDispatch, useSelector } from 'react-redux';
// import Map  from "react-map-gl";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
const MAPBOX_TOKEN = "pk.eyJ1IjoidGFyc2VtY29kZXIiLCJhIjoiY202dHIyNG51MDVqNjJrc2M5aWI4eWtwZSJ9.9U90FjQDDiVZ61NAYJTLFw"; // Replace with your token

const center = {
    lat: 28.6139, // Default center (Delhi, India)
    lng: 77.209,
  };
function Track(){
    const [innerWall, setInnerWall] = useState(false)
    const [outerWall, setOuterWall] = useState(false)
    const dispatch = useDispatch()
    const productItem = useSelector(store=> store.product)
    console.log(productItem)
    const params = useParams()
    useEffect(el=>{
        dispatch(TrackedItemCreator(params.id))
    }, [])


    function OrderDetailsWallInner(){
        setInnerWall(innerWall=> !innerWall)
    }
    function OrderDetailsWallOuter(){
        setOuterWall(outerWall=> !outerWall)
    }

    
    const mapContainerRef = useRef(null);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        mapboxgl.accessToken = MAPBOX_TOKEN;
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [77.2167, 28.6448], // Default center (Delhi)
          zoom:10,
        });
    
        // Add zoom and rotation controls
        map.addControl(new mapboxgl.NavigationControl(), "top-right");
    
        // Define start and end points
        const start = [77.2167, 28.6448]; // Delhi
        const end = [77.391, 28.5355]; // Noida
    
        // Function to get and draw the route
        const getRoute = async () => {
          const query = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${MAPBOX_TOKEN}`;
          const response = await fetch(query);
          const data = await response.json();
          const route = data.routes[0].geometry;
    
          // Add the route as a layer
          map.addSource("route", {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: route,
            },
          });
    
          map.addLayer({
            id: "route",
            type: "line",
            source: "route",
            layout: { "line-join": "round", "line-cap": "round" },
            paint: {
              "line-color": "#007AFF",
              "line-width": 5,
            },
          });
          new mapboxgl.Marker({ color: "green" }) // Start marker (green)
        .setLngLat(start)
        .setPopup(new mapboxgl.Popup().setText("Start: Delhi")) // Optional popup
        .addTo(map);

      new mapboxgl.Marker({ color: "red" }) // End marker (red)
        .setLngLat(end)
        .setPopup(new mapboxgl.Popup().setText("End: Noida")) // Optional popup
        .addTo(map);
        };

        
        map.on("load", getRoute); // Run the function when the map loads
    
        return () => map.remove(); // Cleanup on unmount
      }, []);

  
    

    return(
        <div className="track">
            <div className='map'>
              <div className='delinonehour pad16'>
                <p className='hourdel'>Deliver in : <span>1hr</span></p>
              </div>
              <div ref={mapContainerRef} className='map' />

                <div onClick={OrderDetailsWallInner} className={innerWall ? 'innerLayerOpens itemslayer pad16 flex flex-dir gap16' : 'itemslayer pad16 flex flex-dir gap16'}>
                    <h4 className='head4 headCorrect'>Order details</h4>
                    <p className='items_count'>Total items - {productItem.trackedItem.item_list.length}</p>
                    <p className='ordertime'>Order time - {productItem.trackedItem.time} </p>
                    <p className='ordertime'>Expected delivery - 1:30:30 </p>
                    <div className='itemscover flex flex-dir gap16'>
                        {productItem.trackedItem.item_list.map((el,index)=>
                            <div className='itemsOfCart flex flex-1 pad16' key={el._id} >
                                <div className='flex flex-2 gap8'>
                                    <p className='nameofitem'>{index+1}</p>
                                    <p className='nameofitem'>{el.name}.</p>
                                </div>
                                <p className='nameofitem'>{el.addedValue}{el.units}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div onClick={OrderDetailsWallOuter} className={outerWall ? 'outerLayerOpens deliverylayer pad16 flex flex-dir gap16' : 'deliverylayer pad16 flex flex-dir gap16'}>
                    <h4 className='ordertracks'>Order tracking</h4>
                    <div className='deliverybar'></div>
                    <div className='status flex flex-3 gap16'>
                        <img src={accept} className='statusicon' alt='check'/>
                        <p className='statusname'>Order is being packed</p>
                    </div>
                    <div className='status flex flex-dir gap16'>
                        <div className='flex flex-3 gap16'>
                            <img src={cross} className='statusicon' alt='check'/>
                            <p className='statusname'>Delivery partner at store</p>
                        </div>
                        <p className='deliveryname'>Deleep singh at store to pick your order</p>
                        <p className='deliveryname'>Call delivery agent at <span>+91 7837642836</span></p>
                    </div>
                    <div className='status flex flex-3 gap16'>
                        <img src={cross} className='statusicon' alt='check'/>
                        <p className='statusname'>Order is picked by delivery partner</p>
                    </div>
                    <div className='status flex flex-3 gap16'>
                        <img src={cross} className='statusicon' alt='check'/>
                        <p className='statusname'>Out of delivery</p>
                    </div>
                    <div className='status flex flex-3 gap16'>
                        <img src={cross} className='statusicon' alt='check'/>
                        <p className='statusname'>Order delivered</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Track;