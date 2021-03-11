import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol ,faFlag,faTransgender,faStreetView,} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons' 

import Male from '../../picture/male.png'
import Female from '../../picture/female.png'
const TeamDiscription = (props) => {
    const { strTeamBanner,strCountry,strLeague,strSport,strGender,intFormedYear,strDescriptionEN,strDescriptionDE}= props.description
    
    const styleCart= {
        border:"1px solid #43BFC7",
        borderRadius:"10px",
        marginTop:"20px",
        width:"950px",
       backgroundColor:"#43BFC7",
       color:"white",
       boxShadow:"10px 10px 10px gray"
        
    }
    const discription={
        marginTop:"35px",
        textAlign:"justify",
        padding:"30px",

    }
    const fontAwsome={
        
     
        margin:"20px",
        
       
    }
    return (
            
         <Grid  container justify="center" alignItems="center" direction="row" >
              <img style={{width:"100%"}} src={strTeamBanner} alt=""/>
           <Grid style={styleCart} container justify="center" alignItems="center" direction="row" spacing={3}>
           
               <Grid container direction="column" alignItems="center"  item xs={12} sm={6}>

                <h5>{strLeague}</h5>
                <h6> <FontAwesomeIcon icon={faStreetView} /> Founded:{intFormedYear}</h6>
                <h6> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                <h6> <FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}</h6>
                <h6> <FontAwesomeIcon icon={faTransgender} /> Gender :{strGender}</h6>

               </Grid>

               <Grid  container justify="center" item xs={12} sm={6}>

                {  

                    strGender===strGender?<img src={Male} style={{width:"100%"}} ></img> : <img src={Female} ></img>
                
                  }

               </Grid>

             </Grid>
             
            <Grid style={discription} container direction="column"  item xs={12} sm={12} >
                <h6>{strDescriptionEN}</h6>
                <br/>
                <h6>{strDescriptionDE}</h6>
            </Grid>
            <Grid style={fontAwsome}  alignItems="center"  justify="space-evenly" container >
           <FontAwesomeIcon  size = '3x' color='#3b5998 ' icon={faFacebookF} />
            <FontAwesomeIcon   size = '3x' color='orange' icon={faInstagram} />
            <FontAwesomeIcon   size = '3x' color='#3090C7' icon={faTwitter} />
            
            
            </Grid>
             
             </Grid>
             
        
    );
};

export default TeamDiscription;