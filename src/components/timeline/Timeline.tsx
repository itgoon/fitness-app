import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@mui/lab";
import { ReactNode } from "react";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Box } from "@mui/material";

interface TimeContentType {
  time: string;
  content: string | ReactNode;
  color?: "grey" | "primary" | "secondary";
}

export interface TimelineProps {
  list: TimeContentType[];
  color?: string;
}

const Timeline = ({ list = [] }: TimelineProps) => {
  if (!list) return;

  return (
    <Box>
      <MuiTimeline
        style={{ padding: "0px" }}
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0
          }
        }}
      >
        {list?.map((item) => {
          return (
            <TimelineItem style={{ minHeight: "60px" }}>
              <TimelineSeparator>
                <TimelineDot color={item?.color ? item.color : "grey"} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                item.content
                {/* {typeof item.content === 'string' ? <Typography variant='b1'>{item.content}</Typography> : item.content} */}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </MuiTimeline>
    </Box>
  );
};

export default Timeline;
