import React, { useEffect, useState } from 'react';
import useTools from '../../Hooks/useTools';
import Purchase from '../Purchase/Purchase';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const [tools,setTools] = useTools([])
    const [purchase, setPurchase] = useState(null)
  
    const reversed = tools.slice(0).reverse();
   
    
    // const slicedTools = reverse.slice(0, 6); 
    return (
        <div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-6'>
               { reversed.length===0? <div className='col-span-3'><Loading></Loading></div>:
                    reversed.slice(0, 6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;