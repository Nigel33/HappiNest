import React, { Component } from "react";
import classNames from "classnames";
import { MDBWaves } from 'mdbreact';
import { navigate } from "gatsby";

class customLink extends Component {

    state = {
        cursorPos: {}
    }

    handleClick = e => {
        window.open(this.props.to, '_blank')
        if (!this.props.disabled) {
            e.stopPropagation();
            let cursorPos = {
                top: e.clientY,
                left: e.clientX,
                time: Date.now()
            };
            this.setState({ cursorPos: cursorPos });
        }
    };

    handleNavigation = (location) => {
        navigate
        
        // console.log(location)
        // const locations = location.split('#')             
        // console.log(locations)

        // if (locations.length === 1) {            
        //     navigate(locations[0])            
        // } else if (locations.length > 1) {
        //     let firstLocation = document.getElementById(locations[0])    
                            
        //     if (firstLocation) {                               
        //         firstLocation.scrollIntoView({ 
        //             behavior: 'smooth' })              
        //     } else {
        //         navigate(locations[1])
        //         firstLocation = document.getElementById(locations[0])   
        //         console.log(firstLocation)
        //         // firstLocation.scrollIntoView({ 
        //             // behavior: 'smooth' })      
        //     }       
        // }

       

               
    }

    render() {
        const {
            children,
            className,
            disabled,
            location,
            to,
        } = this.props;

        const { cursorPos } = this.state;

        const classes = classNames(
            "nav-item",
            disabled ? "disabled" : "Ripple-parent",
            location === to && "active",
            className
        );

        return (
            <li
                className={classes}
                onMouseUp={this.handleClick}
                onTouchStart={this.handleClick}
                role="link"
                onClick={() => this.handleNavigation(to)}            >
                <span className="nav-link">
                  {children}
                </span>
                {!disabled && <MDBWaves cursorPos={cursorPos} />}
            </li>
        );
    }
}

export default customLink;

