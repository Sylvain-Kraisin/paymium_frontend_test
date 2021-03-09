import React, { useState, useEffect } from 'react';
import axios from "axios";

function Transaction() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = 'http://private-3f9656-paymiuminterviews.apiary-mock.com/transactions'

        axios.get(url)
            .then(res => setData(res.data))

    }, []);

    return (data)
}

export default Transaction;