import React, { Component } from 'react';
import * as H from './../Algorithms/MergeSort';
import './Main.css'
class Main extends Component {
    primary = "purple";
    secondary = "green";
    animations_speed = 10;
    width = window.innerWidth;
    state = { 
        array:[],
     }
     componentDidMount()
     {
        this.resetArray();
     }
     resetArray = ()=>{
        let array = [];
        for(let i=1;i<20;i++)
            array.push(Math.floor(Math.random()*1000)+5);
            this.setState({array});
     }
     mergeSort = ()=>{
        const animations = H.MergeSort(this.state.array);
        const arrayBars = document.getElementsByClassName("array-bars");
        for(let i=0;i<animations.length;i++)
        {
            const colorChange = i%3 != 2;

            if(colorChange)
            {
                const [barOne, barTwo] = animations[i];
                let color = i%3 ===0 ? this.secondary : this.primary;
                let barStyleOne = arrayBars[barOne].style;
                let barStyleTwo = arrayBars[barTwo].style;
                setTimeout(()=>{
                    barStyleOne.backgroundColor = color;
                    barStyleTwo.backgroundColor = color;
                }, i*this.animations_speed)  
            }
            else 
            {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                  }, i * this.animations_speed);

            }

        }
     }
    render() { 
        const size = 10;
        const numWidth = Math.floor(window.innerWidth*5 / (this.state.array.length * 8));
        const width = `${numWidth}px`;
        const {array} = this.state;
        return ( 
        <div className="container justify-content-center">
            <div className="row">
            <div className="col-12 m2">
             <button style={{margin:'5px'}} onClick={this.resetArray}>Generate new Array</button>
             <button onClick={this.mergeSort}>Merge</button>
             </div>
             {
                 array.map((val, indx)=>(
                     <div className="array-bars" key={indx}
                     style={{
                        backgroundColor: "blue",
                        height: `${val}px`,
                        width: width,
                    }}
                     >
                     </div>
                     
                 ))
             }
            </div>
        </div> 
        );
    }
}
 
export default Main;