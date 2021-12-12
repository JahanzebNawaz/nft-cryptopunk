import React, { useState, useEffect } from 'react'
import instaLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreLogo from '../assets/owner/more.png'
import './Main.css'


const Main = ({ selectedPunk, punkListData }) => {
    const [activatePunk, setActivatePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivatePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

    return (
        <div className='Main'>
            <div className="MainContainer">
                <div className="punkightlight">
                    <div className="punkContainer">
                        <img className='selectedPunk'
                            src={activatePunk.image_original_url}
                            alt="" />
                    </div>
                </div>
                <div className="punkDetails" style={{ 'color': '#fff' }}>
                    <div className="title">{activatePunk.name}
                        <span className="activeNumber">.#{activatePunk.token_id}</span>
                    </div>

                    <div className="owner">
                        <div className="ownerImageContainer">
                            <img src={activatePunk.owner.profile_img_url} alt="" />
                        </div>
                        <div className="ownerDetails">
                            <div className="ownerNameAndHandle">
                                <div>{activatePunk.owner.address}</div>
                                <div className="ownerHandle">@programmer_py</div>
                            </div>
                            <div className="ownerLink">
                                <img src={instaLogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={moreLogo} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main
