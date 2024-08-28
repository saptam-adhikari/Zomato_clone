import React from 'react';
import "./Explore.css";
import questions from "../../Data.js";
import ExploreContainer from "../ExploreContainer/ExploreContainer.js";

const Explore = () => {
    return (
        <div className='explore'>
            <h2>Explore options near me</h2>
            {questions.map(question => (
                <ExploreContainer question={question} key={question.id} />
            ))}
        </div>
    );
};

export default Explore;
