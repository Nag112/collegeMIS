import React from 'react'
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
const handleClick = e =>
{
  window.scrollTo(0,0);
}
export default props => {
   return  <div className="scroll" onClick={handleClick}>
   <Fab color="secondary" size="small" aria-label="scroll back to top">
     <KeyboardArrowUpIcon />
   </Fab>
     </div>
}
  