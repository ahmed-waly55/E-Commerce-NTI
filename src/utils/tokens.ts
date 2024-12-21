import Jwt from "jsonwebtoken";

class CreateTokens {
    resetToken(_id: any) {
        throw new Error("Method not implemented.");
    }
    accessToken = (id: any, role: string) =>
        Jwt.sign({_id: id, role}, process.env.JWT_SECRET!, {expiresIn: process.env.JWT_EXPIRE})

    restToken = (id: any) =>
        Jwt.sign({_id: id}, process.env.JWT_SECRET!, {expiresIn: process.env.JWT_EXPIRE})
}

const createTokens = new CreateTokens();
export default createTokens;