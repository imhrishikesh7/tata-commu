import React from 'react'
import './DevelopmentGoals.css';
import HeadBar from '../../../Components/HeadBar/HeadBar'
// import CircularSDG from '../../../Components/CircularSDG/CircularSDG';

const DevelopmentGoals = () => {
    return (
        <div>
            <HeadBar heading={'SUSTAINABLE DEVELOPMENT GOALS'} icon={'/vector-dev-goals.svg'} theme={'#7A63AB'} />
            <div className='flex dev-goals-wrapper1'>
                <p className='poppins-light'>
                    Leveraging the <strong>UN SDGs</strong> as crucial benchmarks, we plan initiatives, measure impact, and prioritize focus areas. Our strategies closely align with these goals as we serve as a digital ecosystem enabler. <br /> <br />
                    Recognizing the significance of contributing to global sustainability, we've prioritized and mapped direct and indirect SDGs based on risk, relevance, and our organizational contribution, and actively pursue their achievement.
                </p>
                <img src="/image-dev-goals.svg" alt="" />
            </div>
            <div className='dev-goals-wrapper2 flex'>
                <img src="/sdg-wheel 5.svg" alt="" />
                {/* <CircularSDG/> */}
                <div className='poppins-light dev-goals-wrapper2-content'>
                    <p>sdg #3</p>
                    <h1 className='poppins-medium'>GOOD HEALTH AND <br />WELL-BEING</h1>
                    <h5 className='poppins-medium'>OBJECTIVE</h5>
                    <h2 className='poppins-medium'>Promote A Healthier Workforce And <br />Community</h2>
                    <ul>
                        <li>Improve workplace health and relationships</li>
                        <li>Ensure safe working conditions</li>
                        <li>Provide access to health services</li>
                    </ul>
                    <h5 className='poppins-medium'>INITIATIVES</h5>
                    <ul>
                    <li>Ergonomic workspaces</li>
                    <li>IT solutions for safety monitoring</li>
                    <li>Health awareness camps and workshops</li>
                    </ul>
                </div >
            </div >
        </div >
    )
}

export default DevelopmentGoals