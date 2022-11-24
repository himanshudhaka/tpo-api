import { expressjwt } from "express-jwt";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
// import env from "process";

function jwt() {
  const secret = process.env.SECRET as string;
  return expressjwt({ secret, algorithms: ["HS256"] }).unless({
    path: [
      // public routes that don't require authentication
      "/users/authenticate",
    ],
  });
}

export default jwt;
