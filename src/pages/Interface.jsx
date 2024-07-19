import React, { useState } from 'react';
import '../styles/Interface.scss';
import { faDisplay, faL } from '@fortawesome/free-solid-svg-icons';
import ChatGPTSetting, { StableDiffusion, DALL_E, ElevenLabs, Whisper, MusicGen } from '../components/Setting';

const Interface = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('startYours');
    const [isPropertiesVisible, setIsPropertiesVisible] = useState(true);
    const [isChatGPT, setIsChatGPT] = useState(false);
    const [isStableSiffusion, setisStableSiffusion] = useState(false);
    const [isDALLE, setisDALLE] = useState(false);
    const [isElevemLabs, setisElevemLabs] = useState(false);
    const [isWhisper, setisWhisper] = useState(false);
    const [isMusicGen, setisMusicGen] = useState(false);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
        setIsPropertiesVisible(menuItem === 'startYours');
    };
    const [isHistorySelected, setIsHistorySelected] = useState(true);

    const handleButtonClick = () => {
        setIsHistorySelected(!isHistorySelected);
    };
    const [showMenu, setShowMenu] = useState(true);
    const [showProperties, setShowProperties] = useState(true);
    const [showSettings, setShowSettings] = useState(false);

    const generateClick = () => {
        setShowMenu(false);
        setShowProperties(false);
        setShowSettings(true);
    };

    return (
        <div className="container">
            {showMenu &&
                <div className="menu">
                    <div className="header">
                        <div className="title">NetFlow AI</div>
                        <div className="menu-column">
                            <div
                                className={`menu-item ${selectedMenuItem === 'startYours' ? 'selected' : ''}`}
                                onClick={() => handleMenuItemClick('startYours')}
                            >
                                Start yours
                            </div>
                            <div
                                className={`menu-item ${selectedMenuItem === 'tutorial' ? 'selected' : ''}`}
                                onClick={() => handleMenuItemClick('tutorial')}
                            >
                                Tutorial
                            </div>
                            <div
                                className={`menu-item ${selectedMenuItem === 'contact' ? 'selected' : ''}`}
                                onClick={() => handleMenuItemClick('contact')}
                            >
                                Contact
                            </div>
                        </div>
                    </div>
                    <div className="history">
                        <div style={{ display: "flex" }}>
                            <div className={`button ${isHistorySelected ? 'selected' : ''}`} onClick={handleButtonClick}>History</div>
                            <div className={`button ${!isHistorySelected ? 'selected' : ''}`} onClick={handleButtonClick}>Favorite</div>
                        </div>
                        <div className="line"></div>
                        <div className="box">
                            {isHistorySelected ? (
                                <ul>
                                    <li>History Item 1</li>
                                    <li>History Item 2</li>
                                    <li>History Item 3</li>
                                </ul>
                            ) : (
                                <ul>
                                    <li>Favorite Item 1</li>
                                    <li>Favorite Item 2</li>
                                    <li>Favorite Item 3</li>
                                </ul>
                            )}
                        </div>
                        <div className="account-div">
                            <div style={{ display: "flex" }}>
                                <div className="profile-circle">
                                    <img src="./image.svg" alt="User Profile" className="profile-image" />
                                </div>
                                <p>Account ID</p>
                            </div>
                            <button className="custom-button">Go to my account</button>
                        </div>
                    </div>
                </div>
            }
            {showProperties &&
                <div className={`properties ${isPropertiesVisible ? '' : 'hidden'}`}>
                    <button className="utilities-button button1">Utilities</button>
                    <button className="utilities-button button2">Services</button>
                    <div class="utilities-box">
                        <div class="inner-box">
                            <svg width="46" height="34" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 15.6992C1.5 14.8708 2.17157 14.1992 3 14.1992H27.4355C28.2639 14.1992 28.9355 14.8708 28.9355 15.6992V23.7669V31.7578C28.9355 32.5862 28.2639 33.2578 27.4355 33.2578H3C2.17157 33.2578 1.5 32.5862 1.5 31.7578V15.6992Z" stroke="white" />
                                <path d="M7.30078 33.298L18.8486 19.5812C19.4975 18.8104 20.6184 18.6426 21.4645 19.1897L28.9008 23.998" stroke="white" stroke-linecap="square" />
                                <path d="M1.59961 24.2969L4.62009 20.847C5.27683 20.0969 6.38572 19.9451 7.21996 20.491L14.1038 24.9956" stroke="white" stroke-linecap="square" />
                                <circle cx="14.1043" cy="18.0418" r="1.45974" stroke="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8184 1H44C44.5523 1 45 1.44772 45 2V20.2832C45 20.8355 44.5523 21.2832 44 21.2832H32.361V22.2832H44C45.1046 22.2832 46 21.3878 46 20.2832V2C46 0.89543 45.1046 0 44 0H20.8184C19.7138 0 18.8184 0.895428 18.8184 2V11.2371H19.8184V2C19.8184 1.44771 20.2661 1 20.8184 1Z" fill="white" />
                                <path d="M41.1834 6.23761C41.2257 5.96472 41.0387 5.70925 40.7658 5.667L36.3188 4.9786C36.0459 4.93635 35.7904 5.12333 35.7481 5.39622C35.7059 5.66911 35.8929 5.92458 36.1658 5.96683L40.1187 6.57874L39.5068 10.5317C39.4645 10.8046 39.6515 11.06 39.9244 11.1023C40.1973 11.1445 40.4528 10.9575 40.495 10.6846L41.1834 6.23761ZM32.4945 12.7785L40.9846 6.5646L40.394 5.75764L31.9039 11.9715L32.4945 12.7785Z" fill="white" />
                            </svg>
                            <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72863 0H2C0.895431 0 0 0.895433 0 2V18.8043C0 19.9089 0.89543 20.8043 2 20.8043H4.72863V19.8043H2C1.44772 19.8043 1 19.3566 1 18.8043V2C1 1.44772 1.44772 1 2 1H4.72863V0ZM24.2721 19.8043H27C27.5523 19.8043 28 19.3566 28 18.8043V2C28 1.44771 27.5523 1 27 1H24.2721V0H27C28.1046 0 29 0.895431 29 2V18.8043C29 19.9089 28.1046 20.8043 27 20.8043H24.2721V19.8043Z" fill="white" />
                                <path d="M5.04297 4.0957V16.3892" stroke="white" />
                                <path d="M8.19531 7.56445L8.19531 16.3905" stroke="white" />
                                <path d="M11.3477 5.04297L11.3477 13.8691" stroke="white" />
                                <path d="M14.5 4.0957V16.3892" stroke="white" />
                                <path d="M17.6523 5.04297L17.6523 14.4995" stroke="white" />
                                <path d="M20.8047 7.56445L20.8047 16.3905" stroke="white" />
                                <path d="M23.957 4.0957V16.3892" stroke="white" />
                            </svg>
                            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2656 1L12.2656 20.2449" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M24.352 11.211C24.5473 11.0157 24.5473 10.6991 24.352 10.5039L21.17 7.32189C20.9748 7.12663 20.6582 7.12663 20.4629 7.32189C20.2677 7.51715 20.2677 7.83373 20.4629 8.02899L23.2914 10.8574L20.4629 13.6858C20.2677 13.8811 20.2677 14.1977 20.4629 14.393C20.6582 14.5882 20.9748 14.5882 21.17 14.393L24.352 11.211ZM15.0801 11.3574H23.9985V10.3574H15.0801V11.3574Z" fill="white" />
                                <path d="M0.646035 11.211C0.450773 11.0157 0.450773 10.6991 0.646035 10.5039L3.82802 7.32189C4.02328 7.12663 4.33986 7.12663 4.53512 7.32189C4.73038 7.51715 4.73038 7.83373 4.53512 8.02899L1.7067 10.8574L4.53512 13.6858C4.73038 13.8811 4.73038 14.1977 4.53512 14.393C4.33986 14.5882 4.02328 14.5882 3.82802 14.393L0.646035 11.211ZM9.91797 11.3574H0.999589V10.3574H9.91797V11.3574Z" fill="white" />
                            </svg>
                            <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7168 0.578125H27.1666C27.7189 0.578125 28.1666 1.02584 28.1666 1.57812V18.0739C28.1666 18.6262 27.7189 19.0739 27.1666 19.0739H13.7168V0.578125Z" fill="#D9D9D9" fill-opacity="0.5" />
                                <path d="M1.5 2C1.5 1.17157 2.17157 0.5 3 0.5H26.3925C27.2209 0.5 27.8925 1.17157 27.8925 2V9.69843V17.3228C27.8925 18.1513 27.2209 18.8228 26.3925 18.8228H3C2.17157 18.8228 1.5 18.1513 1.5 17.3228V2Z" stroke="white" />
                                <path d="M7.07031 18.8802L18.1529 5.71592C18.8018 4.94513 19.9227 4.7774 20.7688 5.32449L27.878 9.92133" stroke="white" stroke-linecap="square" />
                                <path d="M1.57812 10.2083L4.44581 6.93297C5.10255 6.18287 6.21144 6.03101 7.04568 6.57691L13.6237 10.8814" stroke="white" stroke-linecap="square" />
                                <circle cx="13.6242" cy="4.18278" r="1.38786" stroke="white" />
                            </svg>

                        </div>
                        <div className='ul-container'>
                            <ul>
                                <li>Image Upscaling</li>
                                <li>Denoising</li>
                                <li>Text Split</li>
                                <li>Background remover</li>
                                <li>Voice Enhancement</li>
                                <li>Set voice on video</li>
                                <li>Video Enahncement</li>
                            </ul>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className="prompt-box">
                        <div className="prompt-header">
                            <div className="prompt-icons">
                                <span className="icon">Inputs</span>
                                <span className="icon"><img src="../../public/comment 1.png" alt="" style={{ width: '70%', }} /></span>
                                <span className="icon"><img src="../../public/image-gallery 1.png" alt="" style={{ width: '70%', }} /></span>
                                <span className="icon"><img src="../../public/voice-search 1.png" alt="" style={{ width: '70%', }} /></span>
                            </div>
                        </div>
                        <textarea
                            className="prompt-input"
                            placeholder="Enter Prompt ..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />

                    </div>
                    <div className='line'></div>
                    <div className='prompt-box'>
                        <div className="prompt-header">
                            <div className="prompt-icons">
                                <span className="icon">Outputs</span>
                                <span className="icon"><img src="../../public/logout.png" alt="" style={{ width: '70%', }} /></span>
                            </div>
                        </div>
                    </div>
                    <div className='account-div' style={{ background: '#46386E' }}>
                        <button className="utilities-button button1" onClick={generateClick}>Generate</button>
                        <button className="utilities-button button2">Setting</button>
                    </div>

                </div>
            }
            {showSettings &&
                <div className='Setting'>
                    <button className='setting-title'>Setting</button>
                    <div className='Setting-box'>
                        {isChatGPT && <div className="settings-header">Chat-GPT 3.5 / 4</div>}
                        {isStableSiffusion && <div className="settings-header">Stable Diffusion</div>}
                        {isDALLE && <div className="settings-header">DALL.E</div>}
                        {isDALLE && <div className="settings-header">Eleven Labs</div>}
                        {isWhisper && <div className="settings-header">Whisper</div>}
                        {isMusicGen && <div className="settings-header">Music Gen</div>}
                        <div className='slider-container'>
                            {isChatGPT && <ChatGPTSetting />}
                            {isStableSiffusion && <StableDiffusion />}
                            {isDALLE && <DALL_E />}
                            {isElevemLabs && <ElevenLabs />}
                            {isWhisper && <Whisper />}
                            {isMusicGen && <MusicGen />}
                            </div>
                        <div className="modal-actions">
                            <button className='confirm'>Confirm</button>
                            <button className='cancel'>Cancel</button>
                        </div>
                    </div>


                </div>}
            <div className="selection">
                {selectedMenuItem === 'startYours' &&
                    <div>
                        <div class="nav-start-yours">
                            <div class="toggle-button">
                                <input type="checkbox" id="toggle" />
                                <label for="toggle"></label>
                                <span class="top-text">n</span>
                                <span class="bottom-text">ff</span>
                            </div>
                            <h2 class="start-creation">Start Creations</h2>
                        </div>
                    </div>}
                {selectedMenuItem === 'tutorial' && <div>Tutorial Content</div>}
                {selectedMenuItem === 'contact' && <div>Contact Content</div>}
            </div>
        </div>
    );
};

export default Interface;