import { NextRequest, NextResponse } from "next/server";
import { userList } from "./userList";
import { UserType } from "@/common/types/UserType";

function findUserByUsername( username : string){
    if (!username) return false;

    const userDb = userList.find( userDb => username === userDb.username);
    return userDb;
}


export async function POST(request : NextRequest){
    const body = await request.json()
    const userDb = findUserByUsername( body?.username );
    
    if (!userDb) return NextResponse.json({},{ status: 404 });
    if(userDb.password !== body.password) return NextResponse.json({}, {status: 400})

    return NextResponse.json({ user: userDb ?? null}, { status: 200});
}