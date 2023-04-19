import React from "react";
import "./exploreSection.css";
import ExploreCard from "./exploreCard";

const ExploreSection = ({list, collectionName}) => {
    return  (
        <div className="max-width">
            <div className="collection-title">{collectionName}</div>
            <div className="explore-section">
            {list.map((restaurant) => {
                return <ExploreCard restaurant={restaurant} />
            })}
            </div>
        </div>
    )
}

export default ExploreSection;