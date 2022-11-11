import { useEffect, useRef } from 'react';
import { DataSet, Timeline } from "vis-timeline/standalone";

import "vis-timeline/styles/vis-timeline-graph2d.css";
import Navigation from './components/Navigation';
import './TimelineApp.css'

let items, groups, options;

items = new DataSet([
  {id: 1, content: 'West India Docks', start: '1804-01-01', end: '1988-01-01'},
  {id: 2, content: 'Little Ice Age', start: '1200-01-01', end: '1700-01-01'},
  {id: 3, content: 'Holocene', start: new Date(-11700, 1), end: '2000-01-01'},
  {id: 4, content: '2010 Flash Crash', start: new Date(2010, 5, 6, 14, 32), end: new Date(2010, 5, 6, 15, 2)},
]);

options = {height: "100%", start: new Date(), zoomMax: 500000000000000};

const VisTimeline = () => {
  let container = useRef(null)

  useEffect(() => {
    let $container = container.current
    let timeline = new Timeline($container, items, groups, options);
  }, [])  
  
    return (
      <div id="visualization" ref={container} />
    );
};

function TimelineApp() {

  return (
    <div className="TimelineApp">
      <Navigation />
      <VisTimeline />
    </div>
  )
}

export default TimelineApp
