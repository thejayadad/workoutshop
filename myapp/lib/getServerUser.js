'use server'
import {getServerSession} from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


const getServerUser = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
} 

export default getServerUser;