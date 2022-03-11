import React from 'react'


import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "../components/RadialSeparators";
// Animation
import AnimatedProgressProvider from "../components/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";



function ProgressBar(){


    const percentage = 50;
    const percentage2 = "80%";





return(
    <>
    <div style={{background:"#D6EAF8"}}>
    <h1>TEST</h1>
    <div className="col-3">
        <Progress percent={percentage} status="active" className="barrita" symbolClassName="barrita"/>

        <Progress
            percent={percentage}
            status="success"
            type="circle"
            strokeWidth={12}
            strokeColor={{
                '20%': '#108ee9',
                '50%': '#87d068',
              }}
            className={"barrita"}
            symbolClassName="barrita"
            theme={{
                success: {
                symbol: percentage, //'🏄‍',
                trailColor: 'gray',
                color: 'rgb(223, 105, 180)'
                },
                active: {
                symbol: percentage,
                color: '#fbc630'
                },
                default: {
                symbol: '😱',
                color: '#fbc630'
                }
            }}
        />


    </div>
    <div className="col-1">
        <div className="row">
            <div className="">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
        </div>
    </div>
  


    <div className="col-1">
      <CircularProgressbarWithChildren
        value={80}
        text={`${80}%`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt"
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: "#fff",
            width: "2px",
            // This needs to be equal to props.strokeWidth
            height: `${10}%`
          }}
        />
      </CircularProgressbarWithChildren>
    </div>




    <div className="col-1">   
        <AnimatedProgressProvider
            valueStart={0}
            valueEnd={66}
            duration={1.4}
            easingFunction={easeQuadInOut}
>
            {(value) => {
                const roundedValue = Math.round(value);
                return (
                <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    /* This is important to include, because if you're fully managing the
                    animation yourself, you'll want to disable the CSS animation. */
                    styles={buildStyles({ 
                        pathTransition: 'none' ,
                        pathTransitionDuration: 0.5,
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                    })}
                />
                
                );
            }}
        </AnimatedProgressProvider>;
    </div>



    <div className="col-1">   
        <AnimatedProgressProvider
            valueStart={0}
            valueEnd={66}
            duration={1.4}
            easingFunction={easeQuadInOut}
>
            {(value) => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbarWithChildren
                    value={value}
                    

                    text={`${roundedValue}%`}


                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathTransition: 'none' ,
                      pathTransitionDuration: 0.5,
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                    })}
                  >
                        <RadialSeparators
                        count={12}
                        style={{
                            background: "#fff",
                            width: "2px",
                            // This needs to be equal to props.strokeWidth
                            height: `${10}%`
                        }}
                        />
                  </CircularProgressbarWithChildren>

 
                )}}


        </AnimatedProgressProvider>;
    </div>





    <div className="col-6">

    <div className="progress">
        <div 
        className="progress-bar progress-bar-striped" 
        role="progressbar" 
        style={{width: percentage2}}
        aria-valuenow={percentage2} 
        aria-valuemin="0" 
        aria-valuemax="100">
            {percentage2}
        </div>
    </div>

       
    </div>



    <div className="col-3"></div>
    </div>
    </>
)

}

export default  ProgressBar
