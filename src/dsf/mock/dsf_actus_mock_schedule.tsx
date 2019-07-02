import { solidity } from '../mock/dsf_actus_solidity_tool';
import moment from 'moment';

const eventDate = (date:string) => {
  return moment.unix(parseInt(date)).utc().format('MMMM Do YYYY, h:mm:ss a');
}; 

export const mockSchedule = [
  { eventDate: eventDate(solidity.tool[0].event[0]), 
    eventType: "IED", eventValue: solidity.tool[0].event[3], 
    nominalValue: solidity.tool[0].state[3], nominalRate: 0.1, nominalAccrued: 0 },
  { eventDate: eventDate(solidity.tool[1].event[0]), 
    eventType: "IP", eventValue: solidity.tool[1].event[3], 
    nominalValue: solidity.tool[1].state[3], nominalRate: 0.1, nominalAccrued: 0 },
  { eventDate: eventDate(solidity.tool[2].event[0]), 
    eventType: "IP", eventValue: solidity.tool[2].event[3], 
    nominalValue: solidity.tool[2].state[3], nominalRate: 0.1, nominalAccrued: 0 },
  { eventDate: eventDate(solidity.tool[3].event[0]), 
    eventType: "IP", eventValue: solidity.tool[3].event[3], 
    nominalValue: solidity.tool[3].state[3], nominalRate: 0.1, nominalAccrued: 0 },
  { eventDate: eventDate(solidity.tool[4].event[0]), 
    eventType: "IP", eventValue: solidity.tool[4].event[3], 
    nominalValue: solidity.tool[4].state[3], nominalRate: 0.1, nominalAccrued: 0 },
  { eventDate: eventDate(solidity.tool[5].event[0]), 
    eventType: "IP", eventValue: solidity.tool[5].event[3], 
    nominalValue: solidity.tool[5].state[3], nominalRate: 0.1, nominalAccrued: 0 },
  { eventDate: eventDate(solidity.tool[6].event[0]), 
    eventType: "PR", eventValue: solidity.tool[6].event[3], 
    nominalValue: solidity.tool[6].state[3], nominalRate: 0.1, nominalAccrued: 0 },
];