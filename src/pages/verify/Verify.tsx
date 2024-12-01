import React, { useEffect, useRef, useState } from 'react';
// import { Loader } from 'lucide-react';
import HeaderTitle from '@/components/headerTitle';
import { Link } from 'react-router-dom';

// interface VerifyEmailPageProps {
//     error?: string;
//     isLoading: boolean;
//     verifyEmail: (code: string) => Promise<void>;
// }

const VerifyEmailPage = () => {
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    // const navigate = useRouter();

    const handleVerify = async () => {
        // const verificationCode = code.join("");
        // try {
        //     // await verifyEmail(verificationCode);
        //     navigate.push('/');
        //     toast.success("Email Verified Successfully!");
        // } catch (error) {
        //     console.error(error);
        // }
    };

    const handleChange = (index: number, value: string) => {
        const newCode = [...code];

        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);

            const lastFilledIndex = newCode.findIndex((digit) => digit === "");
            const focusIndex = lastFilledIndex === -1 ? 5 : lastFilledIndex;
            if (inputRefs.current[focusIndex]) {
                inputRefs.current[focusIndex]?.focus();
            }
        } else {
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    useEffect(() => {
        if (code.every(digit => digit !== '')) {
            handleVerify();
        }
    }, [code]);

    return (
        <div
            className='flex items-center justify-center min-h-screen overflow-hidden w-full relative'
        >
            <div className='w-full'>
                <div
                    className="relative max-w-lg mx-auto w-full border shadow-lg rounded-lg space-y-8 p-8"
                >
                    <div className='space-y-2 flex flex-col items-center justify-center w-full'>
                        <HeaderTitle title='Verify Email' />
                        <p className='font-medium text-gray-400 text-center'>Enter the 6-digit code sent to your email address.</p>
                    </div>
                    <form onSubmit={handleVerify} className='relative z-50'>
                        <div className="flex justify-between">
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(e) => {
                                        inputRefs.current[index] = e;
                                    }}
                                    type="text"
                                    maxLength={6}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="size-12 text-center font-bold border border-gray-200 rounded-lg focus:border-primary text-primary focus:outline-none"
                                />
                            ))}
                        </div>
                        {/* {error && <p className="text-red-400 font-semibold text-xs mt-2 text-right">{error}</p>} */}

                        <Link to={'/dashboard'}>
                            <button
                                // disabled={isLoading || code.some((digit) => !digit)}
                                type="submit"
                                className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg hover:from-secondary hover:to-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transition duration-200"
                            >
                                {/* {isLoading ? <Loader className="inline mr-2" /> : "Verify Email"} */}
                                Verify Email
                            </button>
                        </Link>

                    </form>
                </div>
            </div>
            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full opacity-5'>
                <img src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1727461049/clipboard-stethoscope_xo2uo1.jpg" alt="" />
            </div>
        </div>
    );
};

export default VerifyEmailPage; 
