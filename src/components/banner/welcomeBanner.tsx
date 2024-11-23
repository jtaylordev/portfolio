import * as React from 'react';

type WelcomeBannerProps = {
    imageSrc?: string;
    text?: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ imageSrc, text }) => {
    return (
        <div className="center-box">
            {imageSrc ? (
                <img src={imageSrc} alt="Center Box Content" />
            ) : (
                <p>{text || 'Click a box to display an image'}</p>
            )}
        </div>
    );
};

export default WelcomeBanner;