import React from "react";
import PlusIcon from '../icons/plus-icon.svg';

const Button = ({ content, iconImg, bgColor, textColor, border }) => {
    return (
        iconImg == null ? <ButtonWithContent content={content} bgColor={bgColor} textColor={textColor} border={border} /> :
        <ButtonWithIcon content={content} icon={iconImg} />
    );
}

const ButtonWithIcon = ({ content, icon }) => {
    return (
        <div className="inline-block mt-4">
            <div className="flex ">
                <img className="w-6 h-6" src={icon} alt="PlusIcon" />
                <button className="font-medium text-blue-600 ml-2">{ content }</button>
            </div>
        </div>
    );
}

const ButtonWithContent = ({ content, bgColor, textColor, border }) => {
    return (
        <div className="cursor-pointer">
            <button className={`px-11 py-2 ${bgColor} ${textColor} ${border} rounded-lg font-medium`}>{ content }</button>
        </div>
    )
}

export default Button;