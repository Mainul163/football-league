import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
const TeamInformation = (props) => {
    const{idTeam,strAlternate,strLeague,strTeamBadge}=props.team
    const style={
        border:"1px solid red ",
        width:"370px",
        margin:"20px",
        borderRadius:"10px",
        height:"250px",
        textAlign:"center",
        boxShadow:"10px 10px 10px gray",
        padding:"5px"
    }
    const hisory=useHistory()
    const addTeam= (idTeam)=>{
      const url=`/teaminfo/${idTeam}`
      hisory.push(url)
    }

    
    return (
       
        
        <Grid xs={12} style={ style} sm={3}>
            <img style={{width:"100px"}} src={strTeamBadge} alt=""/> 
             <br/>
            <h5> {strAlternate}</h5> 
             
            <h7>{strLeague}</h7>
            <br/>
            <Button onClick={()=> addTeam(idTeam)} variant="contained" color="secondary">
             Explore
            </Button>
        </Grid>
        
       
    );
};

export default TeamInformation;