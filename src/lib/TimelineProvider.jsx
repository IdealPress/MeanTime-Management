import React, { useState } from "react";
import { TimelineContext } from "./TimelineContext";

export default function TimelineProvider({ children }) {
  const [timelineItem, setTimelineItem] = useState(null);

  return (
    <TimelineContext.Provider
      value={{
        timelineItem,
        setTimelineItem
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}
