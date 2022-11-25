
import { NextResponse} from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

export const config ={ 
    matcher: '/',
};


export function middleware(req: NextRequest){ 

    const COOKIE_NAME = 'ab-test';
    let bucket = req.cookies.get(COOKIE_NAME)?.value
   
    console.log(bucket)
    if(!bucket){
        console.log(Math.random() < 0.5? 'new': 'old')
        
    }
    
      
    const path =  bucket === 'new'? '/news' : '/'
    console.log(path)
    const res = NextResponse.rewrite(new URL(path, req.url))

    if(!req.cookies.get(COOKIE_NAME)){
        res.cookies.set(COOKIE_NAME, bucket)
    }

    return res;

}