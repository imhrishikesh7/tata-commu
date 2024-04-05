import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [activeCard, setActiveCard] = useState(0); 

    const handleCardClick = (index) => {
        if (index === 0) {
      
            setActiveCard(0);
        } else {
            setActiveCard(index === activeCard ? null : index);
        }
    };

    const data = [
        {
            title: 'PEOPLE',
            content: 'Content for People',
            image: '/goals-ppl-icon.png',
            backgroundColor: '#AD3088',
            tableData: [
                {
                    heading: 'Diversity',
                    value: 'Enhance Winning Mix to 27.5% by FY 2026'
                },
                {
                    heading: 'L&D Capacity Building',
                    value: 'Maintain Learning-days/Employee: 8 (Year-over-Year)'
                },
                {
                    heading: 'Occupational Health and Safety',
                    value: 'Achieve Zero fatalities'
                },
                {
                    heading: 'Supply Chain',
                    value: ['ESG assessment of Top 25 Suppliers (~40% spend) by FY 2024, and Top 50 (~55% spend) by FY 2027', 
                    'Double the TAAP Supplier base from 16 (FY 2023) to 24 (FY 2025), and to 32 (FY 2027)',
                    'Influence 200+ AA community members lives through programmes']
                }
            ]
        },
        {
            title: 'PLANET',
            content: 'Content for Planet',
            image: '/planet.svg',
            backgroundColor: '#B0BC25',
            tableData: [
                { heading: 'Waste', 
                value: 'Achieve 100% recycling of biodegradable and recyclable waste by FY 2024' },
                { heading: 'Water', 
                value: ['17% water reduction by FY 2026 (against FY 2020 baseline))', 'Augmentation of Rainwater Harvesting Capacity & 5% Rainwater consumption in FY 2025'] },
                { heading: 'Climate Change', 
                value: ['Increase RE Consumption from 18% (FY 2023) to 49% by FY 2025',
                '7% Year-Over-Year Energy Saving',
                `Achieve 'A' band in Carbon Disclosure Project (CDP) 2024`] }
            ]
        },
        {
            title: 'COMMUNITY',
            content: 'Content for Planet',
            image: '/community.svg',
            backgroundColor: '#00B3BD',
            tableData: [
                { heading: 'Community', 
                value: ['Impact 4mn beneficiaries by FY 2024 and 5mn by FY 2026', 
                '95,000 tonnes of carbon community offsets by 2030',
                '75,000 volunteering hours by FY 2024',
                'Increase in per capita volunteering hour to 5.2 hours/voluteer by FY 2024'] },
            ]
        },
        {
            title: 'GOVERNANCE',
            content: 'Content for Planet',
            image: '/governance.svg',
            backgroundColor: '#3D86C6',
            tableData: [
                { heading: 'Corporate Governance', 
                value: [
                    'Ensure transperant, balanced and timely disclosures yearly', 
                    'Agile, simplified, automated and well-monitored governance processes and compliance mechanism yearly',
                    'Continued risk assesment and scenario planning with appropriate mitigation strategies yearly'] },
                { heading: 'Data Privacy & Information Management', 
                value: [
                    'Adoption of leading data security standards across global operations by FY 2026',
                    'Ensure Enterprise-Level Data security for all applications by 2026',
                    'Zero data breach across Tata Communications by FY 2026'] },
            ]
        },
    ];

    return (
        <div className="carousel-container">
            <h3 className='bar-heading-sec poppins-medium'>SHORT-TERM COMMITMENTS</h3>
            <div className="carousel">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`bar ${activeCard === index ? 'active' : ''}`}
                        style={{ backgroundColor: item.backgroundColor }}
                        onClick={() => handleCardClick(index)}
                    >
                        {activeCard !== index && (
                            <h4 className="bar-title poppins-medium">{item.title}</h4>
                        )}
                        {activeCard !== index && (
                            <img src={item.image} alt={item.title} className="bar-image" /> 
                        )}
                        {activeCard === index && (
                            <div className="card" style={{ backgroundColor: 'white' }}>
 
                                <table>
                                    <thead>
                                    <h3 style={{ color: item.backgroundColor }} className='poppins-medium card-heading'>{item.title}</h3>
                                        <tr>
                                            <th className='table-heading poppins-medium'>TARGET</th>
                                            <th className='table-heading poppins-medium'>FY 2024 - FY 2026 GOALS</th>
                                        </tr>
                                    </thead>
                                    <tbody className='carousel-data'>
                                        {item.tableData.map((rowData, rowIndex) => (
                                            <tr key={rowIndex}>
                                                <th className='poppins-medium'>{rowData.heading}</th>
                                                <td className='poppins-light'>
                                                    {Array.isArray(rowData.value) ? (
                                                        <ul className='poppins-light'>
                                                            {rowData.value.map((bullet, bulletIndex) => (
                                                                <li key={bulletIndex}>{bullet}</li>
                                                                
                                                            ))}
                                                        </ul>
                                                        
                                                    ) : (
                                                        <span>{rowData.value}</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
