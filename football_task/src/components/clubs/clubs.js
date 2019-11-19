import React, { Component, lazy, Suspense } from 'react';
import { Col, Container,  Row } from 'reactstrap';
import {httpClient} from '../../tools/HttpClient';
import {appConfig} from "../../tools/AppConfig";
import Loader from './../../loader.js';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'

class clubs extends Component {
  constructor(props){
    super(props);
    this.state = {
      err:false,
    };
    this.leagueContent =this.leagueContent.bind(this);
    this.loadDefaultData ();

    
  }
  loadDefaultData(){
    // this.requestLeagues();
  }
  
  leagueContent(){
    return(
      <div className="main">
        <Container>
         sss
        </Container>
      </div>
    )
  }
  renderBody(){
      return(
       <div>
         <Header></Header>
         {this.leagueContent()}
         <Footer></Footer>
       </div>   
      )
  }

  render() {
    return (
        this.renderBody()
    );
  }
}

export default clubs;