import React from 'react'
import './Strategy.css';
import HeadBar from '../../../Components/HeadBar/HeadBar';
const Strategy = () => {
    return (
        <div>
            <HeadBar heading={'SUSTAINABILITY STRATEGY'} icon={'/vector-globe-in-hand.png'} theme={'#7A63AB'} />
            <div className='head-wrapper'>
                <img className='btn-blocks' src="/small-square-btn.png" alt="" />
                <h1 className='poppins-light heading-sec1' >SUSTAINABILITY STRATEGY</h1>
            </div>
            <div className='stretegy-sec1'>
                <p className='text-green'>
                    Our goal is to create lasting value for our stakeholders (employees, customers, investors, etc.) by having a positive impact on the social and environmental issues that matter to them.
                </p>

                <p>
                    This requires us to focus our efforts on delivering sustainable operations At Tata Communications, we believe that sustainability is the key to achieving positive economic outcomes while effectively managing our ESG performance.
                </p>
            </div>

            <div className='strategy-sec2'>
                <h3 className='bar-heading-sec poppins-medium'>DRIVERS FOR OUR SUSTAINABILITY STRATEGY</h3>
                <div className='table-sec2'>
                    <div className='icon-bg'>
                        <img className='svg-group'src="/group.svg" alt="" />
                        <img className='svg-bar'src="/bar.svg" alt="" /> 
                        <img className='svg-ellipse' src="/ellipse.svg" alt="" />
                        <div className='card-bottom'>
                            <img className='svg-polygon' src="/polygon.svg" alt="" />
                            <p>SUSTAINABLE <br /> DEVELOPMENT GOALS</p>
                        </div>
                    </div>
                    <div className='icon-bg'>
                        <img className='svg-group'src="/group2.svg" alt="" />
                        <img className='svg-bar'src="/bar.svg" alt="" />
                        <img className='svg-ellipse' src="/ellipse.svg" alt="" />
                        <div className='card-bottom'>
                        <img className='svg-polygon' src="/polygon.svg" alt="" />
                            <p>TATA GROUP'S <br />SUSTAINABILITY POLICY</p>
                        </div>
                    </div>
                    <div className='icon-bg'>
                        <img className='svg-group'src="/group3.svg" alt="" />
                        <img className='svg-bar'src="/bar.svg" alt="" />
                        <img className='svg-ellipse' src="/ellipse.svg" alt="" />                        <div className='card-bottom'>
                        <img className='svg-polygon' src="/polygon.svg" alt="" />
                            <p>ESG <br />RISKS <br />(Materiality Assessment)</p>
                        </div>
                    </div>
                    <div className='icon-bg'>
                        <img className='svg-group'src="/group4.svg" alt="" />
                        <img className='svg-bar' src="/bar.svg" alt="" />
                        <img className='svg-ellipse' src="/ellipse.svg" alt="" />
                        <div className='card-bottom'>
                        <img className='svg-polygon' src="/polygon.svg" alt="" />
                            <p>EXTERNAL <br />ENVIRONMENT <br /> (Megatrends, Stakeholder Feedback, <br />Peer Benchmarking in ICT)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='strategy-sec3'>
                <h3>At the core of sustainability lie three essential pillars</h3>
                <h2>PEOPLE | PLANET | COMMUNITY</h2>
                <h3>all interconnected by robust Corporate Governance practices</h3>
            </div>
        </div>
    )
}

export default Strategy