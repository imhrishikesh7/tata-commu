import React, { useState } from 'react';
import './CircularSDG.css'; // Import CSS for styling

const SDGWheel = () => {
    const [selectedSection, setSelectedSection] = useState(null);

    const handleSectionClick = (sectionIndex) => {
        setSelectedSection(sectionIndex);
    };

    return (
        <div className="flex">
        <div className="sdg-wheel">
            {Array.from({ length: 17 }, (_, index) => {
                const angle = (index / 17) * 360;
                const sectionStyle = {
                    transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
                };
                return (
                    <div
                        key={index}
                        className={`section ${selectedSection === index ? 'active' : ''}`}
                        style={sectionStyle}
                        onClick={() => handleSectionClick(index)}
                    >
                        {index + 1}
                    </div>
                );
            })}
            {selectedSection !== null && (
                <div className="arrow-pointer" style={{ transform: `rotate(${selectedSection * (360 / 17)}deg)` }} />
            )}
        </div>
            <div className="data-panel">
                {selectedSection !== null && <div>Data for Section {selectedSection + 1}</div>}
            </div>
        </div>
    );
};

export default SDGWheel;
