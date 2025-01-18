import React from 'react';

interface CookingProps {
    cooking: Cooking[];
}

interface Cooking {
    step: number;
    stepDescription: string;
}

export const Cooking: React.FC<CookingProps> = ({ cooking }) => {
    return (
        <div className="flex flex-col justify-center items-center mx-[5px]">
            <h2 className="text-[28px] my-6 text-EIO font-bold">How to cook it?</h2>
            {
                cooking.map((item, index) =>
                    <div className="text-center flex flex-col justify-center items-center text-[20px]" key={index}>
                        <div className="border-2 border-EIO rounded-full flex justify-center items-center aspect-square h-10">
                            <span className="relative z-[3]">{item.step}</span>
                        </div>
                        <p className="relative z-[4] my-5 text-lightblack">{item.stepDescription}</p>
                    </div>
                )
            }
        </div>
    );
};
