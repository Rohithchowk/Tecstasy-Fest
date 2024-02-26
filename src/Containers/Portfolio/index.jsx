import {AiFillBackward} from 'react-icons/ai';
import PageContainer from "../../Components/PageHeaderContainer";
import {portfolioData} from '../../utils/PortfolioData';
import {filterData} from '../../utils/PortfolioData';
import './style.css'
import { useState } from 'react';
const Portfolio=()=>{
    const [filters,setfilter]=useState(1);
    const [hover,setHover]=useState(null);
    const handleClick=(curr)=>{
        setfilter(curr)
    }
    const handleHover=(ind)=>{
        setHover(ind);
    }
const filterItems=filters===1 ? portfolioData : portfolioData.filter(item=>item.id===filters);
console.log(filterItems);
    return (
        <section id="portfolio" className="portfolio">
        <PageContainer 
        HeaderText="My Portfolio" 
        icon={<AiFillBackward color="#50ceb1" size={40}/>}
        />
        <div className="portfolio__content">
            <ul className='portfolio__content__filter'>
            {
                filterData.map((item)=>(
                    <li 
                    className={item.filterId===filters ?'active':''} 
                    onClick={()=>{handleClick(item.filterId)}} 
                    key={item.filterId}
                    >
                    {item.label}
                    </li>
                ))
            }

            </ul>
            <div className='portfolio__content__cards'>
                {
                    filterItems.map((item,index)=>(
                        <div className='portfolio__content__cards_item' key={`cardItem${item.name.trim()}`}
                        onMouseLeave={()=>{handleHover(null)}}
                        onMouseEnter={()=>{handleHover(index)}}>
                        <div className='portfolio__content__cards_img'>
                            <a > <img src={item.image} alt='example'/></a>
                        </div>
                        <div className='overlay'>
                        {
                            index===hover && (
                                <div className='overlay_item'>
                                    <p>{item.name}</p>
                                    <button><a href={item.link}>Visit</a></button>
                                </div>
                            )
                        }
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </section>
    )
}
export default Portfolio;