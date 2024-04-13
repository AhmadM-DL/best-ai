import React from 'react';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="banner">

            <img src="./assets/img/banner.jpeg" alt=""/>

            <div className="bannerContent">

                <div className="bannerText">The best online learning resources about hundreds of topics, shared by creators.</div>
                
                <div className="searchBox">
                    <input type="text" placeholder='Search learning resources'></input>
                    <span>
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </span>
                </div>

                <div className='trendingBox'>
                    <span>Trending:</span>
                    <span className="trendingItem">Neural Networks</span>
                    <span className="trendingItem">Attention</span>
                    <span className="trendingItem">Transformers</span>
                    <span className="trendingItem">Information Maximization</span>
                </div>
            </div>
        </div>
    );
};

export default Home;