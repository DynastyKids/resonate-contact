import { type } from '@testing-library/user-event/dist/type';
import * as React from 'react';
import 'leaflet/dist/leaflet.css';
import { Card, ListGroup } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function ContactInfo(props) {
    // console.log(props)
    const [contactInfo, setContactInfo] = React.useState(null)

    React.useEffect(() => {

        props.data.forEach(element => {
            if (element.id === props.request) {
                console.log(element)
                setContactInfo(element)
            }
        })
    });
    return (
        <>
            {contactInfo !== null ? <>
                <Card>
                    <Card.Header as="h1">{contactInfo.name}</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <MapContainer center={[contactInfo.address.geo.lat, contactInfo.address.geo.lng]} zoom={13} scrollWheelZoom={false} style={{ height: '50vh', width: '100%' }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[contactInfo.address.geo.lat, contactInfo.address.geo.lng]}>
                                    <Popup>Location of {contactInfo.name}</Popup>
                                </Marker>
                            </MapContainer>
                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Address: {contactInfo.address.suite + "  " + contactInfo.address.street + ", " + contactInfo.address.city + "  " + contactInfo.address.zipcode}</ListGroup.Item>
                            <ListGroup.Item>Company: {contactInfo.company.name}</ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Email: <a href={'mailto:' + contactInfo.email}>{contactInfo.email}</a></ListGroup.Item>
                            <ListGroup.Item>Phone: <a href={"tel:" + contactInfo.phone}>{contactInfo.phone}</a></ListGroup.Item>
                            <ListGroup.Item>Website: <a href={"http://" + contactInfo.website}>{contactInfo.website}</a></ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>


            </> : <><br></br><div className='container'>Select a contact from left</div></>}
        </>
    );
}