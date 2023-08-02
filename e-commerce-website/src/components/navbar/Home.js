import React from 'react';
import classes from "./Home.module.css";
import {BsPlayCircle} from "react-icons/bs";

const Home = () => {
  return (
    <>
    <div className={classes.topmost}>
        <div className={classes.playText}>Get Our Latest Album</div>
        <div className={classes.playBtn}><BsPlayCircle/></div>
    </div>
    <div className={classes.heading}>TOURS</div>
    <div className={classes.outer}>
        <div className={classes.date}>JUL16</div>
        <div className={classes.place}>DETROIT, MI</div>
        <div className={classes.title}>DTE ENERGY MUSIC THEATRE</div>
        <div className={classes.buyBtn}>BUY TICKETS</div>
    </div>
    <div className={classes.outer}>
        <div className={classes.date}>JUL19</div>
        <div className={classes.place}>TORONTO,ON</div>
        <div className={classes.title}>BUDWEISER STAGE</div>
        <div className={classes.buyBtn}>BUY TICKETS</div>
    </div>
    <div className={classes.outer}>
        <div className={classes.date}>JUL 22</div>
        <div className={classes.place}>BRISTOW, VA</div>
        <div className={classes.title}>JIGGY LUBE LIVE</div>
        <div className={classes.buyBtn}>BUY TICKETS</div>
    </div>
    <div className={classes.outer}>
        <div className={classes.date}>JUL 29</div>
        <div className={classes.place}>PHOENIX, AZ</div>
        <div className={classes.title}>AK-CHIN PAVILION</div>
        <div className={classes.buyBtn}>BUY TICKETS</div>
    </div>
    <div className={classes.outer}>
        <div className={classes.date}>AUG 2</div>
        <div className={classes.place}>LAS VEGAS, NV</div>
        <div className={classes.title}>T-MOBILE ARENA</div>
        <div className={classes.buyBtn}>BUY TICKETS</div>
    </div>
    <div className={classes.outer}>
        <div className={classes.date}>AUG 7</div>
        <div className={classes.place}>CONCORD, CA</div>
        <div className={classes.title}>CONCORD PAVILION</div>
        <div className={classes.buyBtn}>BUY TICKETS</div>
    </div>
    
    </>
  )
}

export default Home