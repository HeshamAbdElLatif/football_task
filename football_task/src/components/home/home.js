import React, { Component, lazy, Suspense } from 'react';
import {httpClient} from '../../tools/HttpClient';
import {appConfig} from "../../tools/AppConfig";
import Loader from './../../loader.js';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import { Link } from 'react-router-dom'
import { Col, Container,  Row } from 'reactstrap';
import leagueLogo from './../../assets/images/leagueLogo.jpg'
class home extends Component {
  constructor(props){
    super(props);
    this.state = {
      err:false,
      leagues:[]
    };
    this.requestLeagues =this.requestLeagues.bind(this);
    this.leaguesContent =this.leaguesContent.bind(this);
    this.loadDefaultData ();
  }
  loadDefaultData(){
    this.requestLeagues();
  }
  requestLeagues(){
    //request data
    let config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "X-Auth-Token":"345a622c76e548dca2d272931f517704",
      }
    }
    httpClient.get(
        "competitions",
        config,
        (resp) => {
          this.setState({leagues: resp.data.competitions});
        },
        (error) => {
          this.setState({err: true});
        }
    )
  }
  leaguesContent(){
    return(
      <div className="main">
        <Container>
          <h3 className="pageTitle">Football Leagues</h3>
          {
            this.state.leagues!=0?
              <div className="allLeagues">
                {
                  this.state.leagues.slice(100,124).map((ele,index)=>{
                      return <Link to= {`${ele.id}`} className="league" >
                                <img src={leagueLogo}/>
                                <p>{ele.name}</p>
                            </Link>
                })
                }
              </div>
            :
            <Loader></Loader>
          }
        </Container>
      </div>
    )
  }
  renderBody(){
      return(
       <div>
         <Header></Header>
         {this.leaguesContent()}
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

export default home;