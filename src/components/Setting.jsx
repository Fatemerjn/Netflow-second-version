import React, { useState } from 'react';
import './styles/Setting.scss'; // make sure to link the CSS file

export const ChatGPTSetting = () => {
    const [temperature, setTemperature] = useState(0);
    const [maxLength, setMaxLength] = useState(0);
    const [topP, setTopP] = useState(0);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0);
    const [presencePenalty, setPresencePenalty] = useState(0);

    return (
        <div>
            <div className='se-line'></div>

            <div className='setting-items'>
                <label>Temperature</label>
                <input type="range" min="0" max="2" step="0.01" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Maximum length</label>
                <input type="range" min="0" max="4095" step="1" value={maxLength} onChange={(e) => setMaxLength(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Top P</label>
                <input type="range" min="0" max="1" step="0.01" value={topP} onChange={(e) => setTopP(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Frequency penalty</label>
                <input type="range" min="0" max="2" step="0.01" value={frequencyPenalty} onChange={(e) => setFrequencyPenalty(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Presence penalty</label>
                <input type="range" min="0" max="2" step="0.01" value={presencePenalty} onChange={(e) => setPresencePenalty(e.target.value)} />
            </div>
        </div>
    );
};


export const StableDiffusion = () => {
    const [temperature, setTemperature] = useState(0);
    const [maxLength, setMaxLength] = useState(0);
    const [topP, setTopP] = useState(0);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0);
    const [presencePenalty, setPresencePenalty] = useState(0);

    return (
        <div>
            <div className='se-line'></div>

            <div className='setting-items'>
                <label>Steps</label>
                <input type="range" min="1" max="300" step="0.01" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Width</label>
                <input type="range" min="120" max="1024" step="1" value={maxLength} onChange={(e) => setMaxLength(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Height</label>
                <input type="range" min="128" max="1024" step="0.01" value={topP} onChange={(e) => setTopP(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Guidance_Scale</label>
                <input type="range" min="1" max="20" step="0.01" value={frequencyPenalty} onChange={(e) => setFrequencyPenalty(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Seed</label>
            </div>
            <div className='setting-items'><label>Negative Prompt</label></div>
            <textarea
                className="prompt-input"
                placeholder="What do you want to avoid?"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
        </div>
    );
}

export const DALL_E = () => {
    const [temperature, setTemperature] = useState(0);
    const [maxLength, setMaxLength] = useState(0);
    const [topP, setTopP] = useState(0);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };
    return (
        <div>
            <div className='se-line'></div>

            <div className='setting-items'>
                <label>Width</label>
                <input type="range" min="128" max="1024" step="0.01" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Height</label>
                <input type="range" min="128" max="1024" step="1" value={maxLength} onChange={(e) => setMaxLength(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Quality</label>
                <div style={{ display: "flex", marginRight: "3vw" }}>
                    <button
                        className='option-btn'
                        onClick={() => handleButtonClick('button1')}
                    >
                        Standard
                    </button>
                    <button
                        className='option-btn'
                        onClick={() => handleButtonClick('button2')}
                    >
                        HD
                    </button>
                </div>
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Style</label>
                <div style={{ display: "flex", marginRight: "3vw" }}>
                    <button
                        className='option-btn'
                        onClick={() => handleButtonClick('button1')}
                    >
                        Natural
                    </button>
                    <button
                        className='option-btn'
                        onClick={() => handleButtonClick('button2')}
                    >
                        Vivid
                    </button>
                </div>
            </div>

        </div>
    );
}

export const ElevenLabs = () => {
    const [temperature, setTemperature] = useState(0);
    const [maxLength, setMaxLength] = useState(0);
    const [topP, setTopP] = useState(0);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0);
    const [presencePenalty, setPresencePenalty] = useState(0);

    return (
        <div>
            <div className='se-line'></div>

            <div className='setting-items'>
                <label>Steps</label>
                <input type="range" min="1" max="300" step="0.01" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Width</label>
                <input type="range" min="120" max="1024" step="1" value={maxLength} onChange={(e) => setMaxLength(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Height</label>
                <input type="range" min="128" max="1024" step="0.01" value={topP} onChange={(e) => setTopP(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Guidance_Scale</label>
                <input type="range" min="1" max="20" step="0.01" value={frequencyPenalty} onChange={(e) => setFrequencyPenalty(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Seed</label>
            </div>
            <div className='setting-items'><label>Negative Prompt</label></div>
            <textarea
                className="prompt-input"
                placeholder="What do you want to avoid?"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
        </div>
    );
}

export const Whisper = () => {
    const [temperature, setTemperature] = useState(0);
    const [maxLength, setMaxLength] = useState(0);
    const [topP, setTopP] = useState(0);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0);
    const [presencePenalty, setPresencePenalty] = useState(0);

    return (
        <div>
            <div className='se-line'></div>

            <div className='setting-items'>
                <label>Temperature</label>
                <input type="range" min="0" max="1" step="0.01" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Height</label>
            </div>
            <div className='se-line'></div>
            <div className='setting-items'>
                <label>Prompt</label>
            </div>
            <textarea
                className="prompt-input"
                placeholder="What do you want?"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <div className='se-line' style={{top:"3vh"}}></div>
        </div>
    );
}

export const MusicGen = () => {
    const [temperature, setTemperature] = useState(0);
    const [maxLength, setMaxLength] = useState(0);
    const [topP, setTopP] = useState(0);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0);
    const [presencePenalty, setPresencePenalty] = useState(0);

    return (
        <div>
            <div className='se-line'></div>

            <div className='setting-items'>
                <label>Duration</label>
                <input type="range" min="1" max="120" step="0.01" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            </div>
        </div>
    );
}

export default ChatGPTSetting;