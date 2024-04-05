import React, { useState } from 'react';
import HeadBar from '../../../Components/HeadBar/HeadBar';
import './Commitments.css';
import Carousel from '../../../Components/Carousel/Carousel';
import Goals from '../Goals/Goals';
import DevelopmentGoals from '../DevelopmentGoals/DevelopmentGoals';
// import Slider from '../../../Components/Slider/Slider';
import StakeholderEngg from '../StakeholderEngg/StakeholderEngg';
import Materiality from '../Materiality/Materiality';
import SusGovernance from '../SusGovernance/SusGovernance';

const Commitments = () => {
    const [activeHeading, setActiveHeading] = useState('CLIMATE CHANGE');

    const toggleHeading = (heading) => {
        setActiveHeading(activeHeading === heading ? heading : heading);
    };

    const dataArr = {
        'CLIMATE CHANGE': {
            "Specific Goal": "Carbon Neutral by FY 2030 Net Zero by 2035",
            "Target Year": "2030 For Carbon Neutral 2035 for Net Zero",
            "Base Year": "FY 2022",
            "Boundary": "Global Operations",
            "Inclusion/Scope": "Scope 1, 2 & 3 Emissions",
        },
        'WATER CONSUMPTION': {
            "Specific Goal": "20% Reduction by FY 2030",
            "Target Year": "2030",
            "Base Year": "-",
            "Boundary": "Indian Operations Only",
            "Inclusion/Scope": "-",
        },
        'CHG REDUCTION': {
            "Specific Goal": "Customer Emission CHG Reduction Potential of 20x by FY 2027",
            "Target Year": "2027",
            "Base Year": "FY 2022",
            "Boundary": "Global Operations",
            "Inclusion/Scope": "Low Carbon Products as Identified",
        },
        'ZERO WASTE': {
            "Specific Goal": "Zero Waste to Landfill by FY 2027",
            "Target Year": "2027",
            "Base Year": "-",
            "Boundary": "Indian Operations Only",
            "Inclusion/Scope": "-",
        },
    };

    const renderDataRows = (heading) => {
        if (activeHeading === heading) {
            const data = dataArr[heading];
            return (
                <div className='data-row-wrapper'>
                    {Object.entries(data).map(([key, value], index) => (
                        <div className='data-row' key={key}>
                            <h3 className='poppins-medium'>{key}</h3>
                            <p className={`poppins-light ${index === 0 ? 'poppins-medium first-child-color' : ''}`}>{value}</p>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className='commitments'>
            <HeadBar heading={'SUSTAINABILITY COMMITMENTS'} icon={'/vector-commitments.svg'} theme={'#7A63AB'} />
            <div className='passthrough-wrapper'>
                <img className='bg-passthrough' src="/bg-passthrough.png" alt="" />
                <section className='cmmt1'>
                    <img className='banner-commitments' src="/banner-commitments.svg" alt="" />
                    <div className="cmmt1-content">
                        <img src="/small-square-btn.png" alt="" />
                        <h1 className="cmmt1-content poppins-light">SUSTAINABILITY COMMITMENTS</h1>
                        <p className='poppins-light'>
                            Our sustainability strategy is aligned with the Board-approved long-term Sustainability Goals, which focus on <strong>Climate Change, Circular Economy,</strong> and <strong>customer savings.</strong> These goals are consistent with the Tata Group’s Sustainability Policy, UN Sustainable Development Goals, our company’s materiality assessment, and peer benchmarking. We have also set short-term targets for FY 2024 to FY 2026, which support the long-term goals and cover other important ESG aspects.
                        </p>
                    </div>
                </section>
            </div>
            <section className='cmmt2'>
                <h3 className='bar-heading-sec poppins-medium'>LONG-TERM COMMITMENTS</h3>
                <div className='table'>
                    <div className='table-head-wrapper'>
                        <div className='table-head-wrapper2 '>
                            <h3 className={`poppins-medium ${activeHeading !== 'CLIMATE CHANGE' ? 'inactive-heading' : 'active-heading'}`} onClick={() => toggleHeading('CLIMATE CHANGE')}>CLIMATE CHANGE</h3>
                            <h3 className={`poppins-medium ${activeHeading !== 'WATER CONSUMPTION' ? 'inactive-heading' : 'active-heading'}`} onClick={() => toggleHeading('WATER CONSUMPTION')}>WATER CONSUMPTION</h3>
                            <h3 className={`poppins-medium ${activeHeading !== 'CHG REDUCTION' ? 'inactive-heading' : 'active-heading'}`} onClick={() => toggleHeading('CHG REDUCTION')}>CHG REDUCTION</h3>
                            <h3 className={`poppins-medium ${activeHeading !== 'ZERO WASTE' ? 'inactive-heading' : 'active-heading'}`} onClick={() => toggleHeading('ZERO WASTE')}>ZERO WASTE</h3>
                        </div>
                    </div>
                    <div>
                        {renderDataRows('CLIMATE CHANGE')}
                        {renderDataRows('WATER CONSUMPTION')}
                        {renderDataRows('CHG REDUCTION')}
                        {renderDataRows('ZERO WASTE')}
                    </div>
                </div>
            </section>
            
            <section>
                <Carousel/>
            </section>
            <Goals/>
            <DevelopmentGoals/>
            {/* <Slider/> */}
            <StakeholderEngg/>
            <Materiality/>
            <SusGovernance/>
        </div>
    );
};

export default Commitments;
