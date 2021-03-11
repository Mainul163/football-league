import React, { useEffect, useState } from 'react';
import Cover from '../../picture/cover.jpg'

import TeamInformation from '../TeamInformaton/TeamInformation';
import Grid from '@material-ui/core/Grid';


const Home = () => {
     const coverStyle={
         position:"absolute",
         color:"white", 
       top: "50%",
       left: "50%",
       transform: "translate(-50%, -50%)",
      
     }
     const[team,setTeam]=useState([])
     useEffect(()=>{
         const url=`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
         fetch(url)
         .then(res => res.json())
         .then(data=>setTeam(data.teams))
     },[])
       
    return (
        <div >
            <img style={{width:"100%",height:"500px"}} src={Cover} alt=""/>
            
            <div  style={coverStyle}>
            <h1 > Football League  </h1>
            </div>
              <Grid container justify="center" alignItems="center"> 
            
            {
                team.map(tm =>   <TeamInformation team={tm} key={tm.idTeam}></TeamInformation>)
                
            }
            </Grid>
        </div>
    );
};

export default Home;