import React, { useState, useEffect } from 'react';
import HeadBar from '../../../Components/HeadBar/HeadBar';
import './StakeholderEngg.css';

const StakeholderEngg = () => {
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedTableData, setSelectedTableData] = useState([]);
    useEffect(() => {
        if (data.length > 0) {
            setSelectedTitle(data[0].title);
            setSelectedTableData(data[0].tableData);
        }
    }, []);


    const handleTitleClick = (title, tableData) => {
        setSelectedTitle(title);
        setSelectedTableData(tableData);
    };

    const renderValueList = (values) => {
        return (
            <ul className='stakeholder-ul'>
                {values.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        );
    };

    const renderSubtitleData = (subtitle, value) => {
        return (
            <div className="stakeholder-subtitle">
                <p className="poppins-medium">{subtitle}</p>
                <p className="poppins-light">{value}</p>
            </div>
        );
    };

    const data = [
        {
            title: 'CUSTOMERS',
            tableData: [
                {
                    value: ['Responsive Business Conduct', 'Business Ethics', 'Data privacy and security', 'Effective after sales services', 'Digital technology investments and capabilities'],
                    subtitle1: 'Needs-Based:',
                    value1: 'Tailored customer engagement, feedback sessions, CXO engagement, bid review process, input from sales and account manager, gartener peer reviews and email communications.',
                    subtitle2: 'Ongoing',
                    value2: 'Website updates and social media engagement',
                    subtitle3: 'Yearly',
                    value3: 'Customer satisfaction surveys, customer outreach',
                },
            ]
        },
        {
            title: 'EMPLOYEES',
            tableData: [
                {
                    value: ['Ensuring a secure work environment', 'Embracing divercity and inclusion', 'Opportunities for skill development and training', 'Implementing employee-centric practices', 'Opportunities for career growth and development'],
                    subtitle1: 'Needs-Based & Ongoing:',
                    value1: 'Routine team gatherings, Training sessions, webinars and workshops, Town hall assemblies, Internal dialogues and gatherings, Surveys,  Awards an Acknowledgement initiatives, Safety training sessions',
                    subtitle2: 'Quarterly',
                    value2: 'Coaching evaluations',
                },
            ]
        },
        {
            title: 'INVESTORS AND STAKEHOLDERS',
            tableData: [
                {
                    value: ['Growth and expansion strategy', 'Robust financial position', 'Ethical business practices', 'Transparent ', 'Compliance and governance adherance'],
                    subtitle1: 'Needs-Based:',
                    value1: 'Press releases, conferences, email updates, facility visits, in-person meetings, investor gatherings, non-deal roadshows, conference calls',
                    subtitle2: 'Quarterly',
                    value2: 'Financial reports, earnings, discussions, exchange notifications and press briefings',
                    subtitle3: 'Yearly',
                    value3: 'Annual General Meeting and release of the Annual Report.',
                },
            ]
        },
        {
            title: 'REGULATIONS',
            tableData: [
                {
                    value: ['Legal compliace', 'Governance excellance', 'Ethical behaviour', 'CSR investment', 'Transparent disclosure', 'Alignment with global agendas'],
                    subtitle1: 'Needs-Based & Ongoing:',
                    value1: 'Ensuring compliance with statutary obligations throuth fillings and meetings, establishing new partnerships, addressing HR and labor compliance matters, conducting meetings with senior managemnt and the PR team',
                },
            ]
        },
        {
            title: 'MEDIA AND ANALYSTS',
            tableData: [
                {
                    value: ['Company updates and developments', 'Strategic direction, milestones and industry acknowledgments', 'Compliance with regulations and governance considerations', 'Public disclosures and transparent reporting practices', 'Future plans, expansion strategies and new poduct/service introductions'],
                    subtitle1: 'Needs-Based & Ongoing:',
                    value1: 'Press releases, conferences, media interviews, email advisories, exchange notifications, media oranalysts events, analysts breifings, relationship buildings meetings, website and social media updates',
                    subtitle2: 'Quarterly:',
                    value2: 'Release of financial statements and earnings conference call',
                    subtitle3: 'Yearly:',
                    value3: 'Annual General Meeting and publication of the Annual Report',
                },
            ]
        },
        {
            title: 'SUPPLIERS',
            tableData: [
                {
                    value: ['Etical practices for sustained partnerships', 'Timely delivery, payments and financial transactions', 'Long-term contracts', 'Ensuring competitive pricing', 'Adherance to human rights'],
                    subtitle1: 'Needs-Based:',
                    value1: 'Operational review meetings, workshops/events and selection processes',
                    subtitle2: 'Ongoing',
                    value2: 'Regular meetings, ongoing assesments, feedback surveys',
                },
            ]
        },
        {
            title: `COMMUNITIES AND NGO'S`,
            tableData: [
                {
                    value: ['Generating livelihood opportunities', 'Enhancing education, healthcare and hygiene', 'Community engagement through volunteering', 'Facilitating skill enhancement'],
                    subtitle1: 'Needs-Based & Ongoing:',
                    value1: 'Meetings between CSR team and partners, volunteer initiatives, engagement activities such as DRIVE Week, baseline assesments and benchmark studies',
                },
            ]
        },
    ];

    return (
        <div>
            <HeadBar heading={'STAKEHOLDER MANAGEMENT'} icon={'/stakeholder-mgmt.svg'} theme={'#7A63AB'} />
            <div className='flex stakeholder-mgmt-container1 poppins-light'>
                <div>
                    <p className="p1">
                        Tata Communications places great importance on engaging with a wide range of stakeholders across our value chain. Our well-established stakeholder engagement procedure ensures regular interaction with individuals, groups, and organizations directly or indirectly impacted by our operations.
                    </p>
                    <p className="p2">
                        This proactive approach enables us to develop sustainable solutions and drive inclusive growth, taking into account the core concerns of our stakeholders. Acknowledging the significance of effective and ongoing communication, we empower our employees and collaborate with customers, suppliers, and investors to build trust and achieve positive outcomes.
                    </p>
                </div>
                <img src="/stakehoder-diagram.png" alt="" />
            </div>

            <div className="stakeholder-management-container2">
            <div className="stakeholder-management-container2-table">
                <div className="titles-container poppins-medium">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`title ${selectedTitle === item.title ? 'active' : ''}`}
                            onClick={() => handleTitleClick(item.title, item.tableData)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>

                <div className="card-container">
                    <div className="cardx">
                        <div className="divider"></div>

                        <div className="card-content">
                            <div className="left-half poppins-light">
                                <h2 className="main-card-h2 poppins-medium">EXPECTATIONS</h2>

                                {selectedTableData.length > 0 && renderValueList(selectedTableData[0].value)}
                            </div>
                            <div className="right-half">
                                <h2 className="main-card-h2 poppins-medium">MODE OF COMMUNICATION</h2>

                                {selectedTableData.map((rowData, rowIndex) => (
                                    <div className='right-list' key={rowIndex}>
                                        {rowData.subtitle1 && renderSubtitleData(<p>{rowData.subtitle1}</p>, rowData.value1)}
                                        {rowData.subtitle2 && renderSubtitleData(<p>{rowData.subtitle2}</p>, rowData.value2)}
                                        {rowData.subtitle3 && renderSubtitleData(<p>{rowData.subtitle3}</p>, rowData.value3)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="stakeholder-management-container3">
                <img src="/small-square-btn.png" alt="" />
                <div className="cont3-sec1 flex">
                    <div className='cont3-sec1-left'>

                        <h2 className='poppins-light'>GRIEVANCE REDRESSAL MECHANISM</h2>
                        <p className='poppins-light'>At Tata Communications, we prioritise addressing the concerns and grievances of all our stakeholders. To this end, we have implemented a robust grievance redressal mechanism. For each stakeholder group identified, we have designated one or more specific business functions within our organisation. These functions are equipped with defined communication channels and escalation matrices, ensuring prompt and efficient handling of grievances.</p>
                    </div>
                    <img className='cont3-sec1-img' src="/stake-sec3.png" alt="" />
                </div>
                <p className='poppins-light cont3-sec2-p'>
                    These communication channels are designed to direct grievances to the appropriate personnel or department for resolution in a timely manner. Further, we have established a whistleblower mechanism, along with a dedicated email address, such as EOSH@tatacommunications.com, for reporting grievances related to Environmental, Social and Governance (ESG) aspects.
                    <br /><br />
                    Our unwavering commitment to transparency, accountability and continuous improvement is evident in our grievance redressal mechanism. We strive to address stakeholder concerns promptly and effectively, fostering enduring relationships with all our stakeholders.
                </p>
            </div>

        </div>
    );
};

export default StakeholderEngg;
