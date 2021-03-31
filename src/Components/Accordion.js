import React,{useState} from 'react';

const Accordion =({items})=>{
    const [stateIndex,setStateIndex] = useState(null);

    // const onTitleClick= index =>{
    //     setStateIndex(index);
    // };

    const renderedItem = items.map((item,i)=>{
        const isActive = i === stateIndex? 'active':'';

        //React.Fragment是照樣render,取代<div>因為有時候不需要最上層的<div>
        return <React.Fragment key={i}>
            <div 
            className={`title ${isActive}`}
            onClick={()=>setStateIndex(i)}
            >
                <i className='dropdown icon' />
                {item.title}
            </div>
            <div className={`content ${isActive}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })

    return <div className="ui styled accordion">
        {renderedItem}
        </div>
}

export default Accordion;