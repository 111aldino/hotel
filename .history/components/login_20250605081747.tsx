
// import {signIn} from '@/auth'
// import {FaGoogle} from 'react-icons/fa6'


// export const LoginGoogle = ({redirectUrl} : {redirectUrl}) => {
//   return (
//     <form action={async ()=>{
//         'use server';
//         await signIn ('Google');
//     }}>
//         <button className= "flex items-center justify-center gap-2 w-full bg-blue-700 text-white font-medium py-3 px-6 text-base rounded-sm hover:bg-blue-600 cursor-pointer">
//             <FaGoogle className='size-6'/>
//             Sign In With Google
//         </button>
//     </form>
//   );
// };

'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';

export const LoginGoogle = ({redirectUrl} : {redirectUrl: string} ) => {
  const [isLoading, setIsLoading] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      setDebugInfo('Memulai proses login dengan Google...');
      
      const result = await signIn('google', { 
        callbackUrl: window.location.origin,
        redirect: true
      });
      
      
      setDebugInfo('Redirect berhasil');
    } catch (error) {
      console.error('Login error:', error);
      setDebugInfo(`Error: ${error instanceof Error ? error.message : String(error)}`);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button 
        onClick={handleGoogleLogin}
        disabled={isLoading}
        type="button"
        className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white font-medium py-3 px-6 text-base rounded-sm hover:bg-blue-600 cursor-pointer disabled:bg-blue-400"
      >
        <FaGoogle className="size-6" />
        {isLoading ? 'Connecting...' : 'Sign In With Google'}
      </button>
      
      {debugInfo && (
        <div className="text-xs text-blue-500 mt-2">
          Status: {debugInfo}
        </div>
      )}
    </div>
  );
};