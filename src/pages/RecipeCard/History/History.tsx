import React from 'react';

interface HistoryProps {
    story: Story[];
}

interface Story {
    year: string;
    history: string;
}

export const History: React.FC<HistoryProps> = ({story}) => {
    return (
        <div className="flex flex-col justify-center items-center mt-[20px] border-b-2 border-EIO pb-5 mx-[5px]">
            <h2 className="text-[28px] font-bold text-EIO">A little about the recipe</h2>
            {
                <div className="flex flex-col justify-center items-center text-lightblack text-[18px]">
                    <p>The recipe was invented in {story[0].year}</p>
                    <p>{story[0].history}</p>
                </div>
            }
        </div>
    );
};
