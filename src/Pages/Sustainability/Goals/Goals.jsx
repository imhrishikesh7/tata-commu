import React, { useState } from 'react';
import './Goals.css';
import HeadBar from '../../../Components/HeadBar/HeadBar';

const Goals = () => {
    const data = [
        {
            title: 'ZERO HARM',
            tableData: [
                {
                    value1: 'Zero Fatalities',
                    value2: 'Zero Fatalities',
                    status: 'Completed'
                },
                {
                    value1: '50% reduction in LTIs by FY 2023',
                    value2: '8 LTIs (50% reduction from FY 2019-2020)',
                    status: 'Completed'

                },
                {
                    value1: 'All major facilities to be externally certified on Occupational Health and Safety (ISO 45001:2018) by FY 2023',
                    value2: 'All strategic facilities to be externally certified on Occupational Health and Safety Management System(ISO 45001:2018)',
                    status: 'Completed'

                },
            ]
        },
        {
            title: 'NURTURING HUMAN CAPITAL',
            tableData: [
                {
                    value1: 'Increasing Gender Diversity to 23% by FY 2023',
                    value2: '22%',
                    status: 'Ongoing'

                },
                {
                    value1: 'Becoming a GPTW in all major geographics (5 countries - India, Hong Kong, USA, Canada, Singapore) by FY 2023',
                    value2: 'GPTW Certified in 7 identified regions: India, USA, Canada, Australia, Hong Kong, Singapore and UK',
                    status: 'Completed'
                },
                {
                    value1: 'Average 7.4 learning person days/year (till FY 2023)',
                    value2: 'Average learning person days: 9.89',
                    status: 'Completed'
                },
            ]
        },
        {
            title: 'CLIMATE CHANGE',
            tableData: [
                {
                    value1: '65% increase in renewable energy (RE) procurment (w.r.t. FY 2019-2020) for india (non-IDC operations)',
                    value2: '21.6 MU Achieved (90% of the target)',
                    status: 'Ongoing'
                },
                {
                    value1: '7% Energy saving Y-o-Y (FY 2023 target 5.55 MU)',
                    value2: '6.56 MU completed (118% of the proposed target)',
                    status: 'Completed'
                },
                {
                    value1: 'Measurement of carbon abatement potential of low carbon products and services',
                    value2: '16x carbon emissions were saved by customers compared to our operational emissions in FY 2023',
                    status: 'Completed'
                },
                {
                    value1: 'Achieve A Band in the Carbon Disclosure Project (CDP) by FY 2023',
                    value2: `Achieved 'B' Score (management band) in CDP response 2022`,
                    status: 'Not Completed'
                },
            ]
        },
        {
            title: 'RESOURCE CONSERVATION',
            tableData: [
                {
                    value1: '15% reductio (w.r.t. FY 2020) in water consumption by FY 2023',
                    value2: '209, 563 KL (11% water reduction as compared to FY 2020)',
                    status: 'Ongoing'
                },
                {
                    value1: 'Identification and implementation across india',
                    value2: 'Identification completed and RWH system  commissioned for Delhi, Pune, Bengaluru and Kolkata commissioning in progress',
                    status: 'Ongoing'
                },
                {
                    value1: 'Effective from FY 2021',
                    value2: 'Implemented',
                    status: 'Completed'
                },
                {
                    value1: 'Integration of H&S and EMS',
                    value2: 'All strategic facilities certified on EMS (ISO14001:2015)',
                    status: 'Completed'
                },
            ]
        },
        {
            title: 'EMPOWERING COMMUNITIES',
            tableData: [
                {
                    value1: 'Reach out to 2 milion beneficiaries (directly and indirectly) between FY 2022 - FY 2024',
                    value2: '3 million beneficiaries reached',
                    status: 'Completed'
                },
                {
                    value1: 'Increase to 75%',
                    value2: '67% woman beneficiaries',
                    status: 'Ongoing'
                },
                {
                    value1: 'Increase from 35% to 45%',
                    value2: 'AA Beneficiaries increased to 43% (96% of proposed target)',
                    status: 'Ongoing'
                },
                {
                    value1: 'Initiation in FY 2024 Q1',
                    value2: 'Registration of projects to be initiated',
                    status: 'Ongoing'
                },
            ]
        },
        {
            title: 'GLOBAL EMPLOYEE VOLUNTEERING',
            tableData: [
                {
                    value1: 'Achieved 10% (YoY) increase in the number of employee-volunteers globally',
                    value2: '13,947 volunteers',
                    status: 'Completed'
                },
                {
                    value1: 'Achieved 10% (YoY) increase in the total volunteering hour to 5 hours globally. (New target taken in FY 2022)',
                    value2: '71,757 volunteering hours globally (121% of the proposed target)',
                    status: 'Completed'
                },
                {
                    value1: 'FY 2023: Increase in per capita volunteering hour to 5 hours/volunteer (New target taken in FY 2022)',
                    value2: '5.2 per capita volunteering hours (104% of the proposed target)',
                    status: 'Completed'
                },
            ]
        },

    ];

    const [selectedTitle, setSelectedTitle] = useState(data[0].title);
    const [fadeIn, setFadeIn] = useState(false);

    const handleTitleClick = (title) => {
        setSelectedTitle(title);
        setFadeIn(true); 
    };

    return (
        <>
            <HeadBar heading={'FY24 GOALS & PROGRESS'} icon={'/goals.svg'} theme={'#7A63AB'} />
            <h3 className='bar-heading-sec poppins-medium'>ESG GOALS AND PERFORMANCE AREAS</h3>
                
            <div className="goals-container">

            <div className={`main-card ${fadeIn ? 'fade-in' : ''}`}>
                    <h2 className={`poppins-medium main-card-h2`}>{selectedTitle}</h2>
                    <table className='goals-table'>
                        <tbody className={`goals-table-body`}>
                            <th className='poppins-medium goals-data'>FY 2023 TARGETS</th>
                            <th className='poppins-medium goals-data'>FY 2023 PERFORMANCE</th>
                            <th className='poppins-medium goals-data'>STATUS</th>
                            {data.find((item) => item.title === selectedTitle).tableData.map((rowData, rowIndex) => (
                                <tr key={rowIndex}>

                                    <td className='poppins-light goals-data'>{rowData.value1}</td>
                                    <td className='poppins-light goals-data'>{rowData.value2}</td>
                                    <td className="poppins-light goals-data" > <span className='status-bar' style={{ backgroundColor: rowData.status === 'Completed' ? '#B0BC25' : rowData.status === 'Ongoing' ? '#00B3BD' : 'grey' }}>  {rowData.status} </span></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="little-cards">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`little-card poppins-medium ${selectedTitle === item.title ? 'active' : ''}`}
                            onClick={() => handleTitleClick(item.title)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    );
};

export default Goals;
