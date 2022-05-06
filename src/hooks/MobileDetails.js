import { useEffect, useState } from 'react';

const MobileDetails = (mobileid) => {
    const [mobile, setMobile] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/mobile/${mobileid}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setMobile(data));

    }, [mobileid]);
    return [mobile]
}

export default MobileDetails;