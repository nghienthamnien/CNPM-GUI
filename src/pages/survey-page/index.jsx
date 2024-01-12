import React from 'react';
import Survey from '../../components/survey';
import { setTitle } from '../../util/setTitle';
import './index.css';

const SurveyPage = () => {
    setTitle('Khảo sát');
    return (
        <div className="survey-page">
            <div style={{ padding: '64px 128px' }}>
                <div className="form-title">
                    <h2>Khảo sát</h2>
                </div>
                <div>
                    <Survey />
                </div>
            </div>
        </div>
    );
};

export default SurveyPage;
