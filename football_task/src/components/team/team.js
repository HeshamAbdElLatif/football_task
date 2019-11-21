import React, { Component, lazy, Suspense } from 'react';
import { Col, Container,  Row } from 'reactstrap';
import {httpClient} from '../../tools/HttpClient';
import {appConfig} from "../../tools/AppConfig";
import Loader from './../../loader.js';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
class team extends Component {
  constructor(props){
    super(props);
    this.state = {
      err:false,
      teamData:[],
      matches:[]
    };
    this.teamContent =this.teamContent.bind(this);
    this.requestTeamData =this.requestTeamData.bind(this);
    this.requestMatchesData =this.requestMatchesData.bind(this);
    this.loadDefaultData ();
  }
  loadDefaultData(){
    this.requestTeamData();
    this.requestMatchesData();
  }
  
  requestTeamData(){
    //request data
    let config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "X-Auth-Token":"345a622c76e548dca2d272931f517704",
      }
    }
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    httpClient.get(
        "teams/" +lastURLSegment,
        config,
        (resp) => {
          console.log(resp)
          this.setState({teamData: resp.data});
        },
        (error) => {
          this.setState({err: true});
        }
    )
  }
  requestMatchesData(){
    //request data
    let config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "X-Auth-Token":"345a622c76e548dca2d272931f517704",
      }
    }
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    httpClient.get(
        "teams/" +lastURLSegment+"/matches",
        config,
        (resp) => {
          console.log(resp)
          this.setState({matches: resp.data.matches});
        },
        (error) => {
          this.setState({err: true});
        }
    )
  }
  
  teamContent(){
    
    return(
      <div className="main">
        <Container>
          <h3 className="pageTitle">Football Leagues</h3>
          {
            this.state.teamData!=0 && this.state.matches!=0?
              <div className="teamData">
                 <h3>
                 {this.state.teamData.area.name} /{this.state.teamData.name}
                  </h3>
                <div className="teamHeader">
                  <h2>Squad</h2>
                  <div className="squad">
                  {
                      this.state.teamData.squad.map((ele,index)=>{
                          return <div className="playerData">
                                  <p>{ele.name}</p>
                                  <span>{ele.position}</span>
                                </div>
                      })
                  }
                  </div>
                </div>
                <h2>Matches</h2>
                <div className="teamMatches">
                  
                {
                    this.state.matches.map((ele,index)=>{
                        return <div className="matchBox">
                                <div className="left">
                                  <p>{ele.homeTeam.name}</p>
                                </div>
                                <div className="center">
                                  {
                                    ele.score.winner==null?
                                     <div>
                                        <p>{ele.status}</p>
                                        {/* <span>{ele.utcDate}</span> */}
                                     </div>
                                    :
                                    <div className="result"> 
                                      {ele.score.fullTime.homeTeam} : {ele.score.fullTime.awayTeam}
                                    </div>
                                  }
                                </div>
                                <div className="right">
                                  <p>{ele.awayTeam.name}</p>
                                </div>
                              </div>
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
         {this.teamContent()}
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

export default team;