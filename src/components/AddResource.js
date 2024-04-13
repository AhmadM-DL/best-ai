import './AddResource.css';
import React, { useState } from 'react';

function AddResource() {
    const resourceTypes = [
                        { value: 'article', label: 'Article' },
                        { value: 'youtube-video', label: 'Youtube Video' },
                        { value: 'book-chapter', label: 'Book Chapter' },
                        { value: 'github-repository', label: 'Github Repository' },
                        { value: 'online-course', label: 'Online Course' },
                    ];

    const [resourceType, setResourceType] = useState("article")

    const handleTypeChange=(e)=>{
        setResourceType(e.target.value)
    }

    return (
        <div className="resourceBox">
            <div className="group">
                <label for="selectResourceType">Resource Type</label>
                <select id="selectResourceType" value={resourceType} onChange={handleTypeChange}>
                {resourceTypes.map(({ value, label }) => <option value={value}> {label}</option>)}
                </select>
            </div>
            <input type="text" placeholder="Title"></input>
            <input type="text" placeholder="About *"></input>
            {resourceType === "article" &&
                <div className="group">
                    <input type="url" placeholder="Link"></input>
                </div>
            }

            {resourceType === "youtube-video" &&
                <div className="group">
                    <input type="url" placeholder="Link"></input>
                </div>
            }

            {resourceType === "book-chapter" &&
                <div className="group">
                    <input type="text" placeholder="Book Name"></input>
                    <input type="number" placeholder="Chapter Number"></input>
                </div>
            }

            {resourceType === "github-repository" &&
                <div className="group">
                    <input type="url" placeholder="Link"></input>
                </div>
            }

            {resourceType === "online-course" &&
                <div className="group">
                    <input type="url" placeholder="Link"></input>
                </div>
            }

            <p className="note">* The concept that the learning resource presents. Don't use acrynoms.</p>
        </div>
    );
}

export default AddResource;
