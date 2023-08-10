import React, {useState, useEffect} from 'react';

const [property, setProperty] = useState([])
    
    useEffect(() => {
        fetch("api/properties")
            .then(res => res.json())
            .then(data => setProperty(data.properties))
            .catch(err => console.error(err))
        }, [])