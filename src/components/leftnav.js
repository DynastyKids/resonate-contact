import Nav from 'react-bootstrap/Nav';
import * as React from 'react';
import Container from 'react-bootstrap/Container'
import { Navbar, NavLink } from 'react-bootstrap';
import { findByLabelText } from '@testing-library/react';
import { render } from 'react-dom';
import context from 'react-bootstrap/esm/AccordionContext';

import ContactInfo from './contactinfo';

export default function LeftNavList(props) {
    const [contacts, setContacts] = React.useState([])
    const [requestuser, setRequestUser] = React.useState()

    const leftFixedNav = {
        width:'250px',
        height:'100vh',
        position: 'fixed',
        top: '56px',
        left: 0,
        right: 0,
        bottom: 0,
    }

    // const fixedNavTop = {
    //     paddingTop: '56px',
    //     height: '100%'
    // }

    const sidenavStyle = {
        boxSizing: 'border-box',
      }

    const rightbody = {
        display: 'block',
        paddingLeft:'250px'
    }

    React.useEffect(()=>{
        if(props.data.length>0){
            setContacts(props.data);
        }
    });

    const Contactlist = props.data.map((item) =>{
        // console.log(item);
        
        // return(<Nav.Item style={itemLink} key={item.id}><Nav.Link href="/home">{item.name}</Nav.Link></Nav.Item>);
        return(
            <li className='nav-item' key={item.id}>
                <a className='nav-link link-dark' href="#" onClick={()=>setRequestUser(item.id)}>{item.name}</a>
            </li>
        );
    });

    return (
        <>
        <div style={sidenavStyle}>
            <div className='d-flex flex-column flex-shrink-0 p-4 text-white bg-light' style={leftFixedNav}>
                <ul className='nav nav-pills flex-column mb-auto'>
                {/* {contacts.length} */}
                {Contactlist}
                </ul>
                
            </div>
            <div style={rightbody}>
                <ContactInfo data={props.data} request={requestuser}></ContactInfo>
            </div>
        </div>
        </>
    );
}