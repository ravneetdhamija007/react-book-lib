import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIcon } from '../Actions/favActions.js';
import { withRouter } from 'react-router';
//import Results from './Results.js'
import ErrorBoundary from './ErrorBoundary.js'
//import {shuffleArray} from '../utils.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons/faGooglePlus';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons/faMapMarker';
import FacebookLogin from 'react-facebook-login'

class Favicon extends Component {
    constructor(props){
      super(props)
      this.state ={
        iconData : {},
        domainName:'',
        iconArray:[],
        isLoggedIn: false,
        clientId:'',
        name:'',
        email:'',
        picture:'',

      }

    }

componentDidMount(){


}


static getDerivedStateFromProps(nextProps, prevState) {
  let returnState ={};
  if(nextProps.iconData !== undefined && nextProps.iconData !== prevState.iconData){
    returnState.iconData = nextProps.iconData.data
    console.log(returnState.iconData)
    returnState.iconArray = nextProps.iconData.data.icons
        return returnState;
      }
  return null;
}


handleInputChange = (event)=>{
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({
      [event.target.name]: value
  });
}

handleSubmit = (event) =>{
let domainName = this.state.domainName

this.props.getIcon(domainName);
}

componentClicked=()=>{
  console.log("Clicked")
}

responseFacebook=(response)=>{
  console.log(response)
}

render(){
  let fbContent;

  if(this.state.isLoggedIn){
fbContent = null;
  }else{
    fbContent = (<FacebookLogin
      appId="1545111805629439"
      autoLoad={true}
      fields="name,email,picture"
      onClick={this.componentClicked}
      callback={this.responseFacebook} />);
  }
  return(
    <ErrorBoundary hasError={this.state.iconData ? false : true}>
      <div className="wrapper">
        <div className="title m-t-20">
          <h2>Favicon Glue</h2>
        </div>
  <div>{fbContent}</div>
        <div className="m-b-20">Get and embed Favicons from any web site with one simple, reliable API.</div>
        <div className="searchBlock">
          <input className="simpleInput m-b-10" type="text" name="domainName" id="tryDomain" placeholder="Enter a URL to get its Favicon" onChange={this.handleInputChange} />
          <button className="blue-btn m-r-35" onClick={this.handleSubmit}>Find</button>
        </div>
        <div className="showIcon">
          <table className="center-text">
            <tbody>
              <tr>
                <td rowSpan="2"><img class="lg" src="https://api.faviconkit.com/apple.com/144" /></td>
                <td><img class="md" src="https://api.faviconkit.com/apple.com/57" /></td>
              </tr>
              <tr>
                <td><img class="sm" src="https://api.faviconkit.com/apple.com/16" /></td>
             </tr>
            </tbody>    
          </table>
        </div>
        <footer className="footer-fixed" id='guest-footer-fixed'>
        <div className="wrapper">
          <p>{"@Favicon Glue"} <a href="" target="_blank">{""}</a>&nbsp;&nbsp; <a className="ar-policy-link" href="" target="_blank">{""}</a></p>
        
          <ul id="social">
            <li><a target="_blank" href=""><FontAwesomeIcon icon={faTwitter} /> </a></li>
            <li><a target="_blank" href=""><FontAwesomeIcon icon={faFacebook}/></a></li>
            <li><a target="_blank" href=""><FontAwesomeIcon icon={faYoutube} /> </a></li>
            <li><a target="_blank" href=""><FontAwesomeIcon icon={faGooglePlus} /></a></li>
            <li><a target="_blank" href=""><FontAwesomeIcon icon={faInstagram} /> </a></li>
          </ul>
        </div>
      </footer>
      </div>
        {this.state.showLoader && <h3>Loading...</h3>}
      </ErrorBoundary>
    )
  }
}

function mapStateToProps(state) {
  const returnState  = {};
  if (state.FaviconReducer.action === "ICON_DATA" ) {
    if (state.FaviconReducer.data.response_code !== 0 ) {
      console.log("Oops Error Loading Data")
      //returnState.showLoader = false
      returnState.iconData = state.FaviconReducer.data;
    } else {
      returnState.iconData  = state.FaviconReducer.data;
    }
  }
  return returnState
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getIcon: getIcon}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Favicon);
