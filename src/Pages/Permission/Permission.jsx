import React, { useState } from "react";
import SideNavBar from "../../Components/SideNavBar";
import ProfileHdr from "../../Components/ProfileHdr";
import Switch from "@mui/material/Switch";

const Permission = () => {
  const [checked, setChecked] = useState(true);
  const employee = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const [switchStates, setSwitchStates] = useState({
    viewStatistics: true,
    viewReport: true,
    submitReport: true,
    addFunds: true,
    overallAccess: true,
  });
  const [selectedOption, setSelectedOption] = useState(employee[0].value);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSwitchChange = (switchName) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));
  };

  return (
    <>
      <div className="flex w-screen h-screen ">
        <SideNavBar />
        <div className="w-full h-full">
          <ProfileHdr />
          <div className="flex border w-full h-[95%] bg-[#EBEEF5] ">
            <div className="w-[100%] mt-8 px-[60px] flex flex-col gap-8">
              <h1 className="text-blue-950 text-3xl font-bold font-['Poppins']">
                Permission
              </h1>
              <div className="flex gap-[60px] r">
                <div className="w-[611px] h-[479px] bg-white rounded-[9px] p-7 flex flex-col gap-7">
                  <h2 className="text-blue-950 text-xl font-bold font-['Poppins']">
                    Overall Access
                  </h2>
                  <div>
                    <div className="flex flex-col gap-[60px] pr-4 pt-5">
                      <div className="flex items-center relative ">
                        <p className="text-blue-950 text-base font-normal font-['Poppins'] leading-[21.12px] absolute left-0">
                          Allow all employees to view statistics
                        </p>

                        <div className="absolute right-0">
                          <Switch
                            checked={!checked}
                            onChange={() =>
                              handleSwitchChange("viewStatistics")
                            }
                            inputProps={{ "aria-label": "controlled" }}
                          />{" "}
                        </div>
                      </div>
                      <div className="flex items-center relative ">
                        <p className="text-blue-950 text-base font-normal font-['Poppins'] leading-[21.12px] absolute left-0">
                          Allow all employees view reports
                        </p>

                        {/* <div className="absolute right-0">
                          <Switch
                            checked={!checked}
                            onChange={() =>
                              handleSwitchChange((prevState) => !prevState)
                            }
                            inputProps={{ "aria-label": "controlled" }}
                          />{" "}
                        </div> */}
                      </div>
                      <div className="flex items-center relative ">
                        <p className="text-blue-950 text-base font-normal font-['Poppins'] leading-[21.12px] absolute left-0">
                          Allow all employees to add funds
                        </p>

                        {/* <div className="absolute right-0">
                          <Switch
                            checked={!checked}
                            onChange={() =>
                              handleSwitchChange((prevState) => !prevState)
                            }
                            inputProps={{ "aria-label": "controlled" }}
                          />{" "}
                        </div> */}
                      </div>
                      <div className="flex items-center relative ">
                        <p className="text-blue-950 text-base font-normal font-['Poppins'] leading-[21.12px] absolute left-0">
                          Allow all employees have access to Statistics
                        </p>

                        {/* <div className="absolute right-0">
                          <Switch
                            checked={!checked}
                            onChange={() => handleSwitchChange("overallAccess")}
                            inputProps={{ "aria-label": "controlled" }}
                          />{" "}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[310px] h-[479px] bg-white rounded-[9px] flex flex-col gap-7 p-6">
                  <h2>Person</h2>
                  <div className="">
                    <select
                      id="options"
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      {employee.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="border flex flex-col gap-10 mt-4">
                    <div className="flex relative items-center">
                      <p className="text-blue-950 text-base font-normal font-['Poppins'] leading-[21.12px]">
                        View statistics
                      </p>
                      {/* <div className="absolute right-0">
                        <Switch
                          checked={!checked}
                          onChange={() =>
                            handleSwitchChange((prevState) => !prevState)
                          }
                          inputProps={{ "aria-label": "controlled" }}
                        />{" "}
                      </div> */}
                    </div>
                    <div className="flex relative items-center">
                      <p className="text-blue-950 text-base font-normal font-['Poppins'] leading-[21.12px]">
                        View Report
                      </p>
                      {/* <div className="absolute right-0">
                        <Switch
                          checked={!checked}
                          onChange={() =>
                            handleSwitchChange((prevState) => !prevState)
                          }
                          inputProps={{ "aria-label": "controlled" }}
                        />{" "}
                      </div> */}
                    </div>
                    <div className="flex relative items-center">
                      <p className="text-blue-950 text-base font-normal font-['Poppins'] leading-[21.12px]">
                        Submit Report
                      </p>
                      {/* <div className="absolute right-0">
                        <Switch
                          checked={!checked}
                          onChange={() =>
                            handleSwitchChange((prevState) => !prevState)
                          }
                          inputProps={{ "aria-label": "controlled" }}
                        />{" "}
                      </div> */}
                    </div>
                    <div className="flex relative items-center">
                      <p className="text-blue-950 text-base font-normal font-['Poppins'] leading-[21.12px] absolute">
                        Add Funds
                      </p>
                      {/* <div className="absolute right-0">
                        <Switch
                          checked={!checked}
                          onChange={() =>
                            handleSwitchChange((prevState) => !prevState)
                          }
                          inputProps={{ "aria-label": "controlled" }}
                        />{" "}
                      </div> */}
                    </div>
                    <div className="flex relative items-center">
                      <p className="text-blue-950 text-base font-normal font-['Poppins'] leading-[21.12px]">
                        View Statistics
                      </p>
                      {/* <div className="absolute right-0">
                        <Switch
                          checked={!checked}
                          onChange={() =>
                            handleSwitchChange((prevState) => !prevState)
                          }
                          inputProps={{ "aria-label": "controlled" }}
                        />{" "}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Permission;
