import React, { Component, lazy, Suspense } from 'react';
import { Col, Container,  Row } from 'reactstrap';
import {httpClient} from '../../tools/HttpClient';
import {appConfig} from "../../tools/AppConfig";
import Loader from './../../loader.js';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import { Link } from 'react-router-dom'

class clubs extends Component {
  constructor(props){
    super(props);
    this.state = {
      err:false,
      league:[],
      teams:[]
    };
    this.leagueContent =this.leagueContent.bind(this);
    this.requestLeague =this.requestLeague.bind(this);
    this.requestLeagueTeams =this.requestLeagueTeams.bind(this);

    
    this.loadDefaultData ();
  }
  loadDefaultData(){
    this.requestLeague();
    this.requestLeagueTeams();
  }
  requestLeague(){
    //request data
    let config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "X-Auth-Token":"345a622c76e548dca2d272931f517704",
      }
    }
    httpClient.get(
        "competitions" +window.location.pathname ,
        config,
        (resp) => {
          console.log(resp)
          this.setState({league: resp.data});
        },
        (error) => {
          this.setState({err: true});
        }
    )
  }
  requestLeagueTeams(){
    //request data
    let config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "X-Auth-Token":"345a622c76e548dca2d272931f517704",
      }
    }
    httpClient.get(
        "competitions" +window.location.pathname+"/teams" ,
        config,
        (resp) => {
          console.log(resp)
          this.setState({teams: resp.data.teams});
        },
        (error) => {
          this.setState({err: true});
        }
    )
  }
  leagueContent(){
    return(
      <div className="main">
        <Container>
          <h3 className="pageTitle">Football Leagues</h3>
          {
            this.state.league!=0 && this.state.teams!=0?
              <div className="LeagueData">
                <div className="leagueHeader">
                  <h4>{this.state.league.name}</h4>
                </div>
                <div className="teams">
                  {
                    this.state.teams.map((ele,index)=>{
                        return <Link   to={`${window.location.pathname}/${ele.id}`} className="team" >
                                  <p>{ele.name}</p>
                              </Link>
                  })
                  }
                </div>
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