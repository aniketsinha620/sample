const travelHistory = async () => {
    try {
        const res = await fetch("http://localhost:8080/api/v1/users/getTravelHistory", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",

            },
            credentials: "include"
        })

        if (res.ok) {
            const data = await res.json()
            console.log(data.data)
            const dataArray = data.data
            return dataArray;
        }
    }
    catch (error) {
        console.log(error)
    }
}
export {
    travelHistory
}