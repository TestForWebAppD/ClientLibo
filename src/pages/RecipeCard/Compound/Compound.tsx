import React from 'react';

interface CompoundProps {
    compound: Compound[];
}

interface Compound {
    name: string;
    weight: string;
}

export const Compound: React.FC<CompoundProps> = ({ compound }) => {
    return (
        <div>
            <h2 className="text-[26px] text-center text-EIO font-bold my-5">Compound</h2>
            {compound.map((item, index) => (
                <div
                    key={index}
                    className="ml-16 text-[18px] text-lightblack flex flex-row justify-around items-center lg:text-[14px] sm:text-[12px]"
                    aria-label={`Compound item ${item.name} weighing ${item.weight} grams`}
                >
                    <div
                        className="border-2 border-EIO rounded-full w-8 h-8 text-center my-1 mr-3"
                    >
                        {index}
                    </div>
                    <div className="border-[1px] border-EIO w-[35%] md:w-[20%]"/>

                    <p
                        className="w-[10%] text-center border-2 border-EIO rounded-xl md:w-[25%]"
                    >
                        {item.name}
                    </p>

                    <div className="border-[1px] border-EIO w-[35%] md:w-[20%]"/>

                    <span
                        className="w-[10%] md:w-[25%]"
                    >{item.weight} g</span>
                </div>
            ))}
        </div>
    );
};
