import { createServer, Model } from "miragejs"


createServer({
    models: {
        properties: Model,
    },

    seeds(server) {
        server.create("property", { id: "1", facilities: "5 bedroom flat", price: 12000000, details: "12, Adebayo Street, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse1.jpg?alt=media&token=6de7239a-8d68-4e06-8ca1-5f2475cfcd37", type: "for sale" })
        server.create("property", { id: "2", facilities: "5 bedroom flat", price: 8500000, details: "2, Akinola Street, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse2.jpg?alt=media&token=678f0f02-9509-467a-a8c6-7ed3d12e6aa7", type: "for sale" })
        server.create("property", { id: "3", facilities: "4 bedroom bungalow", price: 1300000, details: "Block 11, GRA, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse3.jpg?alt=media&token=64f2be0f-6b20-4d07-b7b9-305cee6eed12", type: "for rent" })
        server.create("property", { id: "4", facilities: "4 bedrrom bungalow", price: 250000, details: "29, Aladegbaye Avenue, Ikere-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse4.jpg?alt=media&token=6acf4b2d-671e-4147-b419-bbd281fb110d", type: "for rent" })
        server.create("property", { id: "5", facilities: "4 block of 3 bedroom flat", price: 300000, details: "Opposite Fed. Univ., Ido-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse5.jpg?alt=media&token=f455c2cc-7713-499a-9721-266864e84b70", type: "for rent" })
        server.create("property", { id: "6", facilities: "4 bedroom bungalow", price: 29000000, details: "33, Iworoko Area, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse6.jpg?alt=media&token=75f7c504-b027-47fa-8953-7231ae23c6f4", type: "for sale" })
        server.create("property", { id: "7", facilities: "4 bedroom bungalow", price: 1100000, details: "51, Iyin road, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse7.jpg?alt=media&token=096fd170-6363-4112-bdd0-3d017cabbdae", type: "for rent" })
        server.create("property", { id: "8", facilities: "2 bedroom bungalow", price: 200000, details: "7, Ikere road, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse8.jpg?alt=media&token=9e86b32c-02aa-450e-bfc9-1c11fd4b7ddd", type: "for rent" })
        server.create("property", { id: "9", facilities: "3 bedroom bungalow", price: 30000000, details: "5, GRA, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse9.jpg?alt=media&token=44a26c06-5560-4e01-86a1-0ac80d0c9fd9", type: "for sale" })
        server.create("property", { id: "10", facilities: "4 bedroom bungalow", price: 42000000, details: "29, GRA, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse10.jpg?alt=media&token=7da56832-c113-4ec8-9387-c3d84dc0d071", type: "for sale" })
        server.create("property", { id: "11", facilities: "4 bedroom bungalow", price: 8300000, details: "2, Palace road, Are-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse11.jpg?alt=media&token=d6094fab-655b-4e27-8da1-b673f646d173", type: "for sale" })
        server.create("property", { id: "12", facilities: "30 room hotel", price: 55000000, details: "59, Afao road, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse12.jpg?alt=media&token=422e1c4a-6a6b-47a3-aa3b-decb3fb25cb5", type: "for sale" })
        server.create("property", { id: "13", facilities: "5 bedroom bungalow", price: 42000000, details: "6, GRA, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse13.jpg?alt=media&token=6d81196e-205c-455b-9c50-9e5f8136e8bd", type: "for sale" })
        server.create("property", { id: "14", facilities: "5 bedroom flat", price: 12000000, details: "12, Adebayo Street, Ado-Ekiti", houseImage: "https://firebasestorage.googleapis.com/v0/b/onile-cfdfb.appspot.com/o/images%2Fhouse14.jpg?alt=media&token=c50bceb6-d0bf-4bad-ab39-79b05716a723", type: "for sale" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/properties", (schema, request) => {
            return schema.properties.all()
        })
        
        this.get("/properties/:id", (schema, request) => {
            const id = request.params.id
            return schema.properties.find(id)
        })
    }
})