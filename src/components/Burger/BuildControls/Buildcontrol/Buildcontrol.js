import React from 'react';
import buildControls from '../Buildcontrols';

const buildControl=(props)=>(
    <div>
        <div>props.label</div>
        <button>Less</button>
        <button>More</button>
    </div>
);
export default buildControl;