
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';
import marker from '../../img/marker-lez.svg'

const icon = new L.Icon({
    iconUrl: marker,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(23, 32),
    className: 'leaflet-div-icon'
});

const CustomMap = ({paymentList}) => {

    const position = [49.84304942196432, 24.017274606306195]

    return  ( <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                {paymentList.map((payment)=>{
                    return payment.cordList.map((pos, index)=>{
                        return <Marker position={pos} icon={icon} key={index}>
                                <Popup>
                                    {payment.description}
                                </Popup>
                            </Marker>
                    })
                })}
                </MapContainer> )
    }
  
 export default CustomMap
