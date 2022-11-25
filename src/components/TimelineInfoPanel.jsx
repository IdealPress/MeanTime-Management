// Modules
import { useContext } from "react";

// Components
import { TimelineContext } from "../lib/TimelineContext"

// Assets
import "./TimelineInfoPanel.css"
export default function TimelineInfoPanel() {

  const { timelineItem, setTimelineItem } = useContext(TimelineContext);

  return (
    <div
      className="info"
      style={{display: timelineItem === null && "none" }}
    >
      <div className="panel">
        <p>{timelineItem?.title}</p>
      </div>
    </div>
  )
}