import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const BaseUrl = process.env.NEXT_PUBLIC_ANALYTICS_BASEURL;


export default function LeadForm() {
  const typesArr = [
    {
      type: "ofice",
      value: "office"
    },
    {
      type: "coworking",
      value: "co-working"
    },
    {
      type: "meetingroom",
      value: "meeting-room"
    }]

  const [type, setType] = useState(typesArr[0]);
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
    <section  >
      <div className="max-w-[1440px] w-full px-[20px] md:px-[70px] mx-auto ">


        <div className='flex gap-[96px] items-center lg:flex-nowrap flex-wrap justify-between p-[32px] md:p-[48px] bg-[url(/assets/images/png/Grid-background.png)] bg-center bg-no-repeat bg-cover bg-white border-[#E0E3E6] border rounded-[8px]'>
          <div className=" max-w-[540px] w-full ">
            <div>
              <h3 className='text-[36px] font-[600] mb-[16px] '>{localization.home.form.title}</h3>
              <p className='text-[18px] text-[#45484F]'>{localization.home.form.subtitle}</p>

              <div className='flex flex-wrap mt-[40px] gap-[12px]'>
                {typesArr && typesArr.map((item, index) => (<button onClick={() => setType(item)} className={`px-[20px] py-[10px] rounded-[8px]  font-[500] text-[14px] ${type.value == item.value ? "bg-[#F7F7F8] text-[#282829]" : "text-[#282829]"}`} key={index}>{localization.home.form?.[item.type] }</button>
                ))}
              
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 flex-wrap gap-[12px] mb-[16px] w-full'>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder={localization.home.form.name}
                className="border border-[#E0E3E6] p-[16px] bg-white rounded-[4px] shadow-[0px,1px,2px,0px,rgba(13,16,23,0.06)]  focus:outline-none text-[16px] "
              />

              <PhoneInput
                containerClass="bg-[#fff] w-[100px] border border-[#E0E3E6]  rounded-[4px] shadow-[0px,1px,2px,0px,rgba(13,16,23,0.06)] focus:outline-none text-[16px] "
                inputClass="w-full focus:outline-none border-0 bg-[#fff]"
                buttonStyle={{ display: "none", }}
                inputStyle={{ padding: "16px", width:"100%", height: "100%", border: "none", backgroundColor: "#fff" }}
                country={"uz"}
                value={number}
                onChange={(e) => setNumber(e)}
                placeholder={localization.home.form.phone}

              />
            </div>
            <button
              // disabled={!name || !number}
              onClick={() => {
                if (name && number) {

                  SubmitForm()

                }
              }
              }
              type="button"
              className="disabled:opacity-[0.6]   bg-[#282829] text-[#ffffff] font-[500]  rounded-[4px]  h-[56px] w-full"
            >
              {localization.home.form.submit}
            </button>
          </div>
  </div>
    
      </div>

    </section>
  )
}
