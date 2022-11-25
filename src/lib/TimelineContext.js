import { createContext } from "react";

export const TimelineContext = createContext({
  timelineItem: null,
  setTimelineItem: () => {
    throw Error("You forgot to wrap this in a Provider object");
  },
});
