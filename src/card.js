import React from "react";
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';

function Card(props){
    function check1(n,s){
        return n>8?<li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{s}</li>:
        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes}/></span>{s}</li>
    }
    function check2(n,s){
        return n>30?<li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{s}</li>:
        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes}/></span>{s}</li>
    }
    return <div className="col-lg-4  mb-3">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.value[0]}</h5>
                    <h6 className="card-price text-center">${props.value[1]}<span className="period">/month</span></h6>
                    <hr/>
                    <ul className="fa-ul">
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{props.value[2]}</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{props.value[3]}GB Storage</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Unlimited Public Projects</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>Community Access</li>
                        {check1(props.value[1],"Unlimited Private Projects")}
                        {check1(props.value[1],"Dedicated Phone Support")}
                        {check1(props.value[1],"Free Subdomain")}
                        {check2(props.value[1],"Monthly Status Reports")}
                    </ul>
                    <a href="#" className="btn btn-block btn-primary text-uppercase">Check out</a>
                </div>
            </div>
        </div>
}
export default Card;