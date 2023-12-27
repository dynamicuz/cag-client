import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const BaseUrl = process.env.NEXT_PUBLIC_ANALYTICS_BASEURL;


export default function FormModal({isOpen, setIsOpen}) {

    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];
    function SubmitForm() {
        try {
            fetch(`${BaseUrl}/lead/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    phone_number: number,
                    status: "active",
                    type: type.value,
                })
            }).then(() => {
                fetch("https://api.aliinvest.uz/client", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        tel: "+" + number,
                        email: "",
                        text: type.type,
                        user_id: "-1001942822684",
                    }),
                })
                    .catch((e) => {
                        console.error(e.message);
                    });
            }).finally(() => {
                setName("")
                setNumber("")
            }).catch((e) => {
                console.error(e.message);
            })
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <>
        { isOpen?<div className = 'backdrop'>
           <div className='relative form__modal flex flex-col px-[20px] pt-[20px] pb-[20px]'>
                <h3 className='font-oswald text-[30px] '>
                   {localization.home.form.title}
                </h3>
                <button className="absolute right-0 rounded-full w-[40px] h-[40]"
                    type="button"
                    onClick={() => {
                        setIsOpen(false)
                    }}>
                    &times;
                </button>
                <form>
                    <label className='flex flex-col font-[700] text-[18px] pt-[20px]'>
                            {localization.home.form.name}

                            <input placeholder={localization.home.form.name}
 type="text" className='border  border-[#E0E3E6] mt-[6px] font-[400] rounded-[8px] h-[48px] px-[16px] py-[10px]' />
                    </label>
                    <label className='flex flex-col font-[700] text-[18px] pt-[20px]'>
                            {localization.home.form.phone}

                            <PhoneInput
                                containerClass="bg-[#fff] w-[100px] border border-[#E0E3E6]  rounded-[8px] shadow-[0px,1px,2px,0px,rgba(13,16,23,0.06)] focus:outline-none text-[16px] "
                                inputClass="w-full focus:outline-none border-0 bg-transparent"
                                buttonStyle={{ display: "none", }}
                                inputStyle={{ padding: "16px", width: "100%", fontWeight:"400", height: "100%", border: "none", backgroundColor: "transparent" }}
                                country={"uz"}
                                value={number}
                                onChange={(e) => setNumber(e)}
                                placeholder={localization.home.form.phone}


                            />
                    </label>
                    <label className='flex flex-col font-[700] text-[18px] pt-[20px]'>
                            {localization.home.form.country}

                        <select defaultValue={""} className='border  border-[#E0E3E6] mt-[6px] font-[400] rounded-[8px] h-[48px] px-[16px] py-[10px]'>
                                <option defaultChecked disabled value="">                   {localization.home.form.select}</option>
                                <option value="usa">
                                    {localization.home.form.usa}

                                </option>
                        </select>
                    </label>
                        <button className='font-oswald font-[500] w-full bg-[#205FFF] text-[#ffffff] py-[12px] rounded-[40px] mt-[30px]'>                   {localization.home.form.submit}
</button>
                </form>
    </div>
            </div> : null} 
  </>
  )
}
