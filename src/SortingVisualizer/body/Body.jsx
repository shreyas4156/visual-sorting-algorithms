import React, { useEffect } from "react";
import { QuickSort } from "../../Algorithms/QuickSort";
import * as H from "./../../Algorithms/MergeSort";
import Header from "./../../Header";
import "./Main.css";
import { Jumbotron, Container } from "reactstrap";
import BubbleSort from "./../../Algorithms/BubbleSort";
import { Footer } from "../../Footer";
import { connect } from "react-redux";
import { setAlgo, setArray, setSize } from "./../../redux/ActionCreators";
import { HeapSort } from "./../../Algorithms/HeapSort";

const mapStateToProps = (state) => {
  return {
    algo: state.algo.algo,
    size: state.size.size,
    array: state.array.array,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setAlgo: (algo) => dispatch(setAlgo(algo)),
  setSize: (size) => dispatch(setSize(size)),
  setArray: (size) => dispatch(setArray(size)),
});
function Body({ algo, setAlgo, size, setSize, array, setArray }) {
  const numWidth = Math.floor((window.innerWidth * 5) / (array.length * 10));
  const width = `${numWidth}px`;
  const quick = {
    name: "Quick Sort",
    best: "Best Case: O(n Logn)",
    worst: "Worst Case: O(n^2)",
    average: "Average Case: O(n Logn)",
  };
  const merge = {
    name: "Merge Sort",
    best: "Best Case: O(n Logn)",
    worst: "Worst Case: O(n Logn)",
    average: "Average Case: O(n Logn)",
  };
  const heap = {
    name: "Heap Sort",
    best: "Best Case: O(n Logn)",
    worst: "Worst Case: O(n Logn)",
    average: "Average Case: O(n Logn)",
  };
  const bubble = {
    name: "Bubble Sort",
    best: "Best Case: O(n)",
    worst: "Worst Case: O(n^2)",
    average: "Average Case: O(n^2)",
  };
  const primary = "blueviolet";
  const secondary = "#34FF07";
  const animations_speed =
    size >= 10 && size <= 20
      ? 70
      : size > 20 && size < 35
      ? 55
      : size > 35 && size <= 50
      ? 20
      : size <= 100
      ? 15
      : 9;

  useEffect(() => {
    setArray(size);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //merge sort
  const mergeSort = () => {
    const animations = H.MergeSort(array);
    const arrayBars = document.getElementsByClassName("array-bars");
    for (let i = 0; i < animations.length; i++) {
      const colorChange = i % 3 !== 2;

      if (colorChange) {
        const [barOne, barTwo] = animations[i];
        let color = i % 3 === 0 ? secondary : primary;
        let barStyleOne = arrayBars[barOne].style;
        let barStyleTwo = arrayBars[barTwo].style;
        setTimeout(() => {
          barStyleOne.backgroundColor = color;
          barStyleTwo.backgroundColor = color;
        }, i * animations_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight / 3}px`;
        }, i * animations_speed);
      }
    }
  };

  //quick sort
  const quickSort = () => {
    const animations = QuickSort(array);
    for (let i = 0; i < animations.length; i++) {
      const [barOne, barTwo, changeColor] = animations[i];
      const arrayBar = document.getElementsByClassName("array-bars");
      if (changeColor.color) {
        let color = changeColor.color === 1 ? secondary : primary;
        let barOneStyle = arrayBar[barOne].style;
        let barTwoStyle = arrayBar[barTwo].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animations_speed);
      } else {
        let barOneStyle = arrayBar[barOne].style;
        setTimeout(() => {
          barOneStyle.height = `${barTwo / 3}px`;
        }, i * animations_speed);
      }
    }
  };

  //Bubble Sort
  const bubbleSort = () => {
    const animations = BubbleSort(array);
    for (let i = 0; i < animations.length; i++) {
      const [barOne, barTwo, changeColor] = animations[i];
      const arrayBar = document.getElementsByClassName("array-bars");
      if (changeColor !== 0) {
        let color = changeColor === 1 ? secondary : primary;
        let barOneStyle = arrayBar[barOne].style;
        let barTwoStyle = arrayBar[barTwo].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animations_speed);
      } else {
        let barOneStyle = arrayBar[barOne].style;
        setTimeout(() => {
          barOneStyle.height = `${barTwo / 3}px`;
        }, i * animations_speed);
      }
    }
  };

  const heapSort = () => {
    const animations = HeapSort(array);
    for (let i = 0; i < animations.length; i++) {
      const [barOne, barTwo, changeColor] = animations[i];
      const arrayBar = document.getElementsByClassName("array-bars");
      if (changeColor !== 2) {
        let color = changeColor === 0 ? secondary : primary;
        let barOneStyle = arrayBar[barOne].style;
        let barTwoStyle = arrayBar[barTwo].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animations_speed);
      } else {
        let barOneStyle = arrayBar[barOne].style;
        setTimeout(() => {
          barOneStyle.height = `${barTwo / 3}px`;
        }, i * animations_speed);
      }
    }
  };

  const sorts = (algo) => {
    if (algo === "merge") mergeSort();
    else if (algo === "quick") quickSort();
    else if (algo === "bubble") bubbleSort();
    else if (algo === "heap") heapSort();
  };

  const handleValue = (value) => {
    //console.log(value);
    setSize(value);
    setArray(value);
  };
  return (
    <React.Fragment>
      <Header
        sort={sorts}
        resetArray={setArray}
        valueChange={handleValue}
        changeAlgo={setAlgo}
        algo={algo}
        size={size}
      />
      <main>
        <div className="containe" style={{ marginTop: "2px" }}>
          {array.map((val, indx) => (
            <div
              className="array-bars"
              key={indx}
              style={{
                height: `${val / 3}px`,
                width: width,
              }}
            ></div>
          ))}
          <hr />
        </div>
        {algo === "merge" ||
        algo === "quick" ||
        algo === "bubble" ||
        algo === "heap" ? (
          <Jumbotron
            style={{ textAlign: "center", backgroundColor: "#8E8E8E" }}
            fluid
          >
            <Container fluid>
              <h1 className="display-3">
                {algo === "merge"
                  ? merge.name
                  : algo === "quick"
                  ? quick.name
                  : algo === "heap"
                  ? heap.name
                  : bubble.name}
              </h1>
              <p className="lead">
                {algo === "merge"
                  ? merge.best
                  : algo === "quick"
                  ? quick.best
                  : algo === "heap"
                  ? heap.best
                  : bubble.best}
              </p>
              <p className="lead">
                {algo === "merge"
                  ? merge.average
                  : algo === "quick"
                  ? quick.average
                  : algo === "heap"
                  ? heap.average
                  : bubble.average}
              </p>
              <p className="lead">
                {algo === "merge"
                  ? merge.worst
                  : algo === "quick"
                  ? quick.worst
                  : algo === "heap"
                  ? heap.worst
                  : bubble.worst}
              </p>
            </Container>
          </Jumbotron>
        ) : null}
      </main>
      <Footer />
    </React.Fragment>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Body);
