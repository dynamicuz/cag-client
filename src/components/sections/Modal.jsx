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
    const [status, setStatus] = useState(false);
    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];
    function SubmitForm() {
        try {

                fetch("https://api.aliinvest.uz/client", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        tel: "+" + number,
                        email: "",
                        text: type,
                        user_id: "-4017862255",
                    }),
                })
            .finally(() => {
                setName("")
                setNumber("")
                setType("")
                setIsOpen(false)
            }).catch((e) => {
                console.error(e.message);
            })
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <>
            {isOpen ? <div className='backdrop' onClick={() => {
                setIsOpen(false)
        }}>
           <div onClick={(e) => e.stopPropagation()} className='mx-[10px] relative form__modal flex flex-col px-[15px] md:px-[20px] pt-[20px] pb-[20px]'>
                <h3 className='font-oswald text-[30px] '>
                   {localization.home.form.title}
                </h3>
                    <button className="absolute right-[5px] text-[25px] font-[700] flex items-center justify-center rounded-full top-[5px]  h-[35px] w-[35px] pb-[4px]  hover:bg-[#ccc]"
                    type="button"
                    onClick={() => {
                        setIsOpen(false)
                    }}>
                    &times;
                </button>
                    <form onSubmit={SubmitForm}>
                    <label className='w-full flex flex-col font-[700] text-[18px] pt-[20px]'>
                            {localization.home.form.name}

                            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={localization.home.form.name}
                                type="text" className='border w-full  border-[#E0E3E6] mt-[6px] font-[400] rounded-[8px] h-[48px] px-[16px] py-[10px]' />
                    </label>
                        <label className='flex flex-col w-full font-[700] text-[18px] pt-[20px]'>
                            {localization.home.form.phone}

                            <PhoneInput
                                containerClass="bg-[#fff] w-[100px] border border-[#E0E3E6]  rounded-[8px] shadow-[0px,1px,2px,0px,rgba(13,16,23,0.06)] focus:outline-none text-[16px] "
                                inputClass="w-full focus:outline-none border-0 bg-transparent"
                                buttonStyle={{ display: "none", }}
                                inputStyle={{ padding: "16px", width: "100%", fontWeight:"400", fontSize:"16px", height: "100%", border: "none", backgroundColor: "transparent" }}
                                country={"uz"}
                                value={number}
                                onChange={(e) => setNumber(e)}
                                placeholder={localization.home.form.phone}


                            />
                    </label>
                        <label className='flex flex-col font-[700] w-full text-[18px] pt-[20px]'>
                            {localization.home.form.country}

                            <select required value={type} onChange={(e) => {
                                setType(e.target.value)
                            }} className='border  border-[#E0E3E6] mt-[6px] w-full font-[400] rounded-[8px] h-[48px] px-[16px] py-[10px]'>
                                <option defaultChecked disabled value="">                   {localization.home.form.select}</option>
                                <option value="usa">
                                    {localization.home.form.usa}

                                </option>
                        </select>
                    </label>
                        <button type='submit' className='font-oswald font-[500] w-full bg-[#205FFF] text-[#ffffff] py-[12px] rounded-[40px] mt-[30px]'>                   {localization.home.form.submit}
</button>
                </form>
    </div>
            </div> : null} 
  </>
  )
}
