import React from 'react'
import InputComp from './InputComp'

const ContactForm = ({showModal, setShowModal}) => {

    const handleNameChange = (e) => {
        setName(e.target.value);
        //console.log("name", name);
      };

  return (
    <>
    {showModal && (
        <div className='fixed z-50 flex justify-center inset-0 top-20'>
        
    <div className="bg-[#E8F5FF]  w-full h-[115%]  px-5 md:w-[30%] py-5 CustomShadowColored rounded-md md:rounded-[15px]  mt-2">
        {/* {setShowModal && ( */}
          <h3
            onClick={() => setShowModal(false)}
            className="text-3xl text-end items-end justify-end flex font-semibold   cursor-pointer"
          >
            x
          </h3>
        {/* )} */}
        <h3 className="md:text-[28px] text-[20px] text-center md:text-left mb-5 md:mb-0">
          Let’s Get to know you
        </h3>

        <div className="flex flex-col gap-5 mt-3">
          <InputComp
            placeholder={"Full Name"}
            type={"text"}
            value={name}
            onChange={handleNameChange}
          />
          <InputComp
            placeholder={"Email"}
            type={"email"}
            value={name}
            onChange={handleNameChange}
          />

          <InputComp
            placeholder={"Mobile Number"}
            type={"number"}
            value={name}
            onChange={handleNameChange}
            className={" "}
          />
          <div className="flex items-center text-center justify-between pl-2 pr-4 bg-white CustomShadowLight text-[#515151] border-[1px] border-[#bfcbd3] placeholder:text-[#515151] w-full  h-[46px] outline-none  rounded-[22px]">
            <select
              name=""
              id=""
              className="rounded-[22px] h-full w-full outline-none pl-2 bg-white"
            >
              <option
                className="placeholder:text-[#515151] text-[#515151]"
                value=""
              >
                When do you want to launch a solution?
              </option>

              <option value="">immediately</option>
              <option value="">2-3 months</option>
              <option value="">4-6 months</option>
              <option value="">after 6 months</option>
            </select>

            {/* <div className="">
              <HiChevronDown className="text-lg md:text-[25px]" />
            </div> */}
          </div>
          <textarea
            name=""
            id=""
            cols="20"
            rows="4"
            placeholder="About Project"
            className={` CustomShadow placeholder:text-[#515151] border-[1px] border-[#bfcbd3] w-full  outline-none p-4 rounded-[22px]  `}
          ></textarea>

          {/* <ReCAPTCHA sitekey={TEST_SITE_KEY} onChange={verifiedUser} /> */}

          {/* <Button
            secondary={"secondary"}
            className="!text-[20px] disabled:cursor-not-allowed "
            disabled={!verified}
          >
            {location.pathname == "/" ? "Let's Innovate" : "Submit"}
          </Button> */}
        </div>
      </div>
      </div>
    )}
    </>
  )
}

export default ContactForm