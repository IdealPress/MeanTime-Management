// Modules
import { useContext, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { DataSet, Timeline } from "vis-timeline/standalone";

// Components
import Navigation from './components/Navigation';
import TimelineInfoPanel from './components/TimelineInfoPanel';
import TimelineProvider from './lib/TimelineProvider';
import { TimelineContext } from './lib/TimelineContext';

// Styles
import "vis-timeline/styles/vis-timeline-graph2d.css";
import './TimelineApp.css'

const ItemTemplate = ({ item,  }) => {
  return (
    <div>
      <label>
        {item.content}
      </label>
    </div>
  )
};

const VisTimeline = () => {
  
  const { setTimelineItem } = useContext(TimelineContext);

  const container = useRef(null)

  const groups = null;

  const items = new DataSet([
    {id: 1, content: 'West India Docks', start: '1804-01-01', end: '1988-01-01'},
    {id: 2, content: 'Little Ice Age', start: '1200-01-01', end: '1700-01-01'},
    {id: 3, content: 'Holocene', start: new Date(-11700, 1), end: '2000-01-01'},
    {id: 4, content: '2010 Flash Crash', start: new Date(2010, 5, 6, 14, 32), end: new Date(2010, 5, 6, 15, 2)},
  ]);

  const clickHandler = () => { 
    console.log('hello');
    setTimelineItem(item);
  }

  const options = {
    height: "100%", 
    start: new Date(), 
    zoomMax: 500000000000000,
    template: function (item, element) {
      if (!item) {
        return;
      }
      let root = createRoot(element); 
      return root.render(
        <div onClick={() => (clickHandler)}>
          <ItemTemplate item={item} />
        </div>
      );
    },
  };

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
      <TimelineProvider>
        <TimelineInfoPanel />
        <VisTimeline />
      </TimelineProvider>
    </div>
  )
}

export default TimelineApp
