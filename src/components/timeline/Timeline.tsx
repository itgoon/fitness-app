
import {Timeline as MuiTimeline, TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab'; 
import Typography from '../typography';
import { Div } from '../styled';
import { ReactNode } from 'react';
import Card, { CardWrap } from '../card/Card';
import  {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

interface TimeContentType {
time:string;
content : string|ReactNode;
}


export interface TimelineProps {
 list:TimeContentType[];
 color?:string;

}

const Timeline = ({ list = []}: TimelineProps) => {

  if(!list)return;


  return ( 
    <MuiTimeline
    
    style={{padding : '0px', }}
    sx={{
      [`& .${timelineOppositeContentClasses.root}`]: {
        flex: 0.2, 
      },
    }}
    >
      {list?.map((item)=>{
        return (
          <TimelineItem style={{minHeight : '60px'}}>
          <TimelineOppositeContent color="textSecondary" style={{paddingLeft : '0px'}}>
           
           <Typography variant='b2' color='--light-color'> {item.time}</Typography>

          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> 
            {typeof item.content === 'string' ? (
                 <CardWrap padding='0px'>
                 <Card radius='50px' height='auto'>
                   <Div padding='6px 16px'>
                     <Typography align='start' variant='b1' color='--dark-color'>{item.content}</Typography>   </Div>
                
                 </Card>
               </CardWrap>
            ) : (
item.content
            )}

         


            {/* {typeof item.content === 'string' ? <Typography variant='b1'>{item.content}</Typography> : item.content} */}
          </TimelineContent>
        </TimelineItem>
        )
      })}
 
 
  </MuiTimeline>
  );
};

export default Timeline;
