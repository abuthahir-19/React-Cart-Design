import React from "react";

const Status = ({ content, icon, bgColor, textColor }) => {
    return (
        <div className={`inline-block items-center px-2 py-1 w-auto ${bgColor} rounded-md`}>
            <div className='flex items-center justify-between'>
                <p className={`${textColor} font-semibold`}>{ content }</p>
                <img className={`h-6 w-6 ml-2 ${textColor} relative`} src={icon} alt="delivery" />
            </div>
        </div>
    );
}

export default Status;