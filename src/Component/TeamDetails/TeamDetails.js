import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDiscription from '../TeamDiscription/TeamDiscription';

const TeamDetails = () => {
    const{info}=useParams();
    const[teamInfo,setTeamInfo]=useState([])
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${info}`
        fetch(url)
        .then(res => res.json())
        .then(data=>setTeamInfo(data.teams))
    },[info])
    return (
       
           <div>
          {
              teamInfo.map( tf=> <TeamDiscription description={tf}></TeamDiscription>)
          }
          
          </div>
    );
};

export default TeamDetails;