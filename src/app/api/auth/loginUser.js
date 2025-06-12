"use server"
import { collectionNamesObj, dbConnect } from "@/lib/dbConnect";
// import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt"
// import { collectionNamesObj, dbConnect } from "@/lib/dbConnect";

// export const loginUser = async (payload) => {
//     const { email, password } = payload;
//     const userCollection = await dbConnect(collectionNamesObj.userCollection)
//     const user = await userCollection.findOne({ email });
//     if (!user) return null
//     const isPasswordOK = await bcrypt.compare(user.password, password)
//     if (!isPasswordOK) return null
//     return user;
// }

export const loginUser = async (payload) => {
    const { email, password } = payload;

    // ✅ Await the dbConnect to get actual collection
    const userCollection = await dbConnect(collectionNamesObj.userCollection);

    // ✅ Look up the user by email
    const user = await userCollection.findOne({ email });

    if (!user) return null;

    // ✅ Compare provided password with stored hashed password
    const isPasswordOK = await bcrypt.compare(password, user.password);

    if (!isPasswordOK) return null;

    // ✅ Return user data (filter sensitive fields if needed)
    return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
    };
};