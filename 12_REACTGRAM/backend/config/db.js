const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
    try {
        const dbCom = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.rvup2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        )

        console.log("Conectou com o bando!")

        return dbCom
    } catch (error) {
        console.log(error)
    }
};

conn()

module.exports = conn;