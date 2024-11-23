import * as React from 'react';

type NavCardProps = {
    index: number;
    onClick: (index: number) => void;
    label?: string;
};

const NavCard: React.FC<NavCardProps> = ({ index, onClick, label }) => {
    return (
        <div className={`box box-${index}`} onClick={() => onClick(index)}>
            {label || `Box ${index + 1}`}
        </div>
    );
};

export default NavCard;