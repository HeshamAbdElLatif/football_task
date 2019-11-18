import React, { Component, lazy, Suspense } from 'react';
import {httpClient} from '../../tools/HttpClient';
import {appConfig} from "../../tools/AppConfig";
// import Waiting from './../../Waiting/waiting';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import { Link } from 'react-router-dom'

class home extends Component {
  constructor(props){
    super(props);
    this.state = {
      err:false,
      leagues:[]
    };
    this.requestLeagues =this.requestLeagues.bind(this);
    this.leaguesContent =this.leaguesContent.bind(this);
    // this.RequestOneLeague =this.RequestOneLeague.bind(this);
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
          console.log(resp)
          this.setState({leagues: resp.data.competitions});
        },
        (error) => {
          this.setState({err: true});
        }
    )
  }
  leaguesContent(){
    return(
      <div className="allLeagues">
        {/* {console.log(this.state.leagues)} */}
        {
          this.state.leagues.slice(0, 12).map((ele,index)=>{
              // return <div className="league">
              //     <div className="icon"></div>
              //     <div className="info">
              //       <h5>{ele.name}</h5>
              //       <p></p>
              //     </div>
              // </div>
              return <Link to={"/"+ele.id}>taniarascia</Link>
         })
        }
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