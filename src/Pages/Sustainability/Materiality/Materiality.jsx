import React from 'react'
import './Materiality.css';
import HeadBar from '../../../Components/HeadBar/HeadBar';

const Materiality = () => {
  return (
    <div>
        <HeadBar heading={'MATERIALITY ASSESMENT'} icon={'/materiality-icon.png'} theme={'#7A63AB'} />
        <div className='materiality-sec1'>
        <div className="materiality-sec1-p flex poppins-light">
            <p className='purple-highlight-p'>
            We acknowledge and address key issues affecting our operations, as identified by stakeholders, in our pursuit of long-term responsible and sustainable business practices
            </p>
            <p>
            We continuously monitor, evaluate, and validate economic, environmental, social, and governance concerns critical to our ongoing value creation. The materiality process we employed to assess and prioritize our material topics, as guided by input from both internal and external stakeholders, is outlined below
            </p>
        </div>
        <div className="sec2-row flex poppins-light">
            <div className='m-row-card'>
                <img src="./m-row-i1.png" alt="" />
                <h4>IDENTIFY</h4>
                <p>
                Identification of material issues involves leveraging various inputs, such as GRI Standards compliance, evaluation within the Dow Jones Sustainability Index (DJSI), participation in the Carbon Disclosure Project (CDP), regulatory assessments, peer benchmarking exercises, and engaging in stakeholder consultations.
                </p>
            </div>
            <div className='m-row-card'>
                <img src="./m-row-i2.png" alt="" />
                <h4>PRIORITISE</h4>
                <p>
                Prioritisation of material issues is determined by assessing their potential impact on the business, external operating conditions, and key stakeholders.
                </p>
            </div>
            <div className='m-row-card'>
                <img src="./m-row-i3.png" alt="" />
                <h4>VALIDATE</h4>
                <p>
                Obtain validation from <br />management.
                </p>
            </div>
            <div className='m-row-card'>
                <img src="./m-row-i4.png" alt="" />
                <h4>DISCLOSE</h4>
                <p>
                The key material topics are matched with the appropriate GRI standard indicators, and their advancement is openly disclosed
                </p>
                
            </div>
            <img className='m-row-arrow-line' src="./m-row-arrow-line.svg" alt="" />

        </div>
    </div>
    </div>
  )
}

export default Materiality