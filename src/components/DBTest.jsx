import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { getDocs, 
    collection, 
    addDoc, 
    deleteDoc, 
    doc, 
    updateDoc,
} from 'firebase/firestore'

const DBTest = () => {
    // Property State
    const [propertiesList, setPropertiesList] = useState([])

    // Adding New Property State
    const [newResidential, setNewResidential] = useState('')
    const [newData, setNewData] = useState('')
    const [isAvailability, setIsAvailability] = useState(false)


    // Update Property Residential State
    const [updateResidential, setUpdateResidential] = useState("")

    // Reading Property from Database
    const propertiesCollectionRef = collection(db, "properties")
   

    // Submitting properties to database
    const onSubmitProperty = async () => {
        try {
            await addDoc(propertiesCollectionRef, {
            residential: newResidential,
            date: newData,
            availability: isAvailability,
        });

            getPropertiesList()
        } catch (err) {
            console.error(err)
        }
    }

    // Delete properties
    const deleteProperty = async (id) => {
        const propertyDoc = doc(db, 'properties', id)
        await deleteDoc(propertyDoc)
        console.log("Property deleted")
    }


    // Update properties residential
    const updatePropertyResidential = async (id) => {
        const propertyDoc = doc(db, 'properties', id)
        await updateDoc(propertyDoc, {residential: updateResidential})
        console.log("Property residential updated")
    }

    // Getting Property from Database
    const getPropertiesList = async () => {
        try {
            const data = await getDocs(propertiesCollectionRef)
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id}))
            setPropertiesList(filteredData)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getPropertiesList()
    }, [])

  return (
    <div>

        <div>
            <input 
                type="text" 
                placeholder='Add Residential Properties' 
                onChange={(e) => setNewResidential(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder='Add Date' 
                onChange={(e) => setNewData(Number(e.target.value))} 
            />
            <input 
                type="checkbox" 
                checked={isAvailability}
                onChange={(e) => setIsAvailability(e.target.checked)} 
            />
            <label htmlFor="">Property Date</label>
            <button onClick={onSubmitProperty}>Submit</button>
        </div>


        {propertiesList.map((property) => (
            <div key={property.id}>
                <h1 style={{color: property.availability ? "green" : "red"}}>{property.residential}</h1>
                <h2>{property.date}</h2>

                <button onClick={() => deleteProperty(property.id)}>Delete Property</button>
                <input type="text" placeholder='New Property' onChange={(e) => setUpdateResidential(e.target.value)} />
                <button onClick={() => updatePropertyResidential(property.id)}>Update Property</button>
            </div>
        ))}
        
    </div>
  )
}

export default DBTest