import jwt from "jsonwebtoken";
import { UserEntity } from "../entities/User";

export const access = async( user: UserEntity, type: number) => {
    const secretKey = (process.env.JWT_SECRET_KEY) ? process.env.JWT_SECRET_KEY : ""
    const token: string = await jwt.sign(
        {
            type: type,
            id: user.id,
            email: user.email
        },
        secretKey,
        {
            expiresIn: "168h",
        }
    );
    return token;
}