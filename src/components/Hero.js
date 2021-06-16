import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Controller, Scene } from 'react-scrollmagic';


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#1B1B1B',
    padding: '5% 10%'
  },
  titlesHero: {
    color: 'white',
    fontFamily: 'Roxbo',
    fontSize: '5em',
     margin: '5px'

  },
  orange: {
          color: '#FE612E'
  },
  lila: {
      color: '#CFABC9'
  },
  line:{
      transform: 'rotate(40deg)',
      width: '150px',
  },
  titlesContainer : {
    paddingLeft: '60%',
    paddingTop: '10%'

  },
   whoWeAre: {
      color: 'white',
      fontFamily: 'Sofia',
      fontWeight: 'bold',
      textAlign: 'center'

  },
  subtitle: {
      color: 'white',
      fontFamily: 'Roxbo',
      textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2em'


  },
  paragraph : {
       color: 'white',
      fontFamily: 'Sofia',
      textAlign: 'center'
  },
  containerLine: {
    textAlign :'-webkit-center'

  },
  linePurple: {
    width: '120px',
    height : '5px',
    background: '#CFABC9'

  },
  panel: {
    overflow: 'hidden',
    height: '90vh',
    width: '100vw',
    background: '#1B1B1B',
    backgroundImage: 'url(../assets/images/fondo-amare.jpg)'
    
  },
  panel2: {
   overflow: 'hidden',
    height: '80vh',
    width: '100vw',
    background: '#1B1B1B',
  },
  dFlex:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
  },
  gridTitleHero: {
      paddingTop: '5% !important'
  }
  

}));

export default function Hero() {
  const classes = useStyles();

  return (

<Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
    <Scene pin >
        <Grid container spacing={3} className={classes.panel}>

            <Grid item xs={12} sm={6} className={classes.gridTitleHero } >
                {/* <hr className={classes.line} />  */}
                <div className={classes.titlesContainer} id="trigger"> 

     
                         <h1 className={classes.titlesHero + ' ' + classes.lila}
                             data-aos="fade-down"
                                data-aos-delay="1000"
                                data-aos-duration="500"
                              data-aos-anchor=".App"
                             >Diseño</h1>
                
                        <h1 className={classes.titlesHero}
                         data-aos="fade-down"
                                data-aos-delay="1500"
                                data-aos-duration="500"
                                data-aos-anchor=".App">para</h1>
                        <h1 className={classes.titlesHero}
                         data-aos="fade-down"
                                data-aos-delay="2000"
                                data-aos-duration="500"
                                data-aos-anchor=".App">gente</h1>
                        <h1 className={classes.titlesHero  + ' ' + classes.orange}
                         data-aos="fade-down"
                                data-aos-delay="2500"
                                data-aos-duration="500"
                                data-aos-anchor=".App">creativa</h1>

                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
            </Grid>
        </Grid>

      </Scene>

      <Scene pin >

        <Grid container spacing={3} className={classes.panel2} id="trigger2">
            <Grid item xs={12} className={classes.dFlex}>
                <h2 className={classes.whoWeAre}
                        data-aos="fade"
                                data-aos-delay="500"
                                data-aos-duration="500"
                              >  QUIENES SOMOS </h2>
                <div className={classes.containerLine}  data-aos="fade"
                                data-aos-delay="1000"
                                data-aos-duration="200"
                              > 
                <div className={classes.linePurple}> </div> </div>

                <p className={classes.subtitle}
                                   data-aos="fade"
                                data-aos-delay="1500"
                                data-aos-duration="500"
                                >Somos un estudio creativo que busca <br /> construir marcas reales con propósitos</p>

                <p className={classes.paragraph}
                                 data-aos="fade"
                                data-aos-delay="1500"
                                data-aos-duration="500"
                                
                              > Creemos que ua marca merece ser autentica <br /> y representada de manera visualmente impresionante </p>
            </Grid>
        
        </Grid>
      </Scene>


    </Controller>

   
  );
}
