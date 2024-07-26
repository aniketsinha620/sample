import React, { useEffect, useState } from 'react';

const EmployeeData = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployeeDetails = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/v1/adminVerify/adminGetEmployeeDetails", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                });

                if (res.ok) {
                    const data = await res.json();
                    setEmployees(data.data);
                    console.log(data.data);
                } else {
                    console.error("Failed to fetch employee details");
                }
            } catch (error) {
                console.error("Error fetching employee details:", error);
            }
        };

        fetchEmployeeDetails();
    }, []);

    return (
        <div className='w-[100%] bg-[#343434] p-2 rounded-lg text-[#adb5bd] flex flex-col gap-2'>
            {employees.map((employee) => (
                <div key={employee.id} className="flex justify-around p-1 bg-[#575757] rounded-lg">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-4 bg-gray-200">
                        <img src={employee.avatar ? employee.avatar : "/photo_aniket.jpg"} alt="Avatar" className="w-full h-full object-contain" />
                    </div>
                    <div className="mr">
                        <span>{employee.fullname ? employee.fullname.toUpperCase() : "N/A"}</span>

                    </div>
                    <div>
                        <span>{employee.department ? employee.department.toUpperCase() : "N/A"}</span>

                    </div>
                    <div>
                        <span>{employee.phoneNumber ? employee.phoneNumber : "N/A"}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EmployeeData;
