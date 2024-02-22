import React from 'react';
import '../Switches/Switches.css';

const Switches = (props) => {

    return (

        <div className='d-flex'>
            <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
 
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  
</div>
        </div>
    );
};

export default Switches;