import React, { useEffect, useState } from 'react'

function Fetch() {

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response)

                if (!response.ok == "true") {
                    throw new Error("Not data fond");
                }

                return response.json();

            })
            .then((data) => {
                console.log(data)
                setdata(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);


    return (
        <div className='nav-container'>

            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.id}</th>
                                    <th>{item.title}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )

            }



        </div>
    )
}

export default Fetch