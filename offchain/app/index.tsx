"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HexagonGroup = ({ position, rotation = 0, scale = 1 }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right', rotation?: number, scale?: number }) => {
    const getPosition = () => {
        switch (position) {
            case 'top-left':
                return { top: '-100px', left: '-100px' };
            case 'top-right':
                return { top: '-100px', right: '-100px' };
            case 'bottom-left':
                return { bottom: '-100px', left: '-100px' };
            case 'bottom-right':
                return { bottom: '-100px', right: '-100px' };
        }
    };

    return (
        <>
            <style jsx>{`
                .hexagon-group {
                    opacity: 0.5;
                    transition: opacity 0.3s ease;
                }
                .hexagon-group:hover {
                    opacity: 0.7;
                }
            `}</style>
            <div className="hexagon-group" style={{
                position: 'absolute',
                ...getPosition(),
                transform: `rotate(${rotation}deg) scale(${scale})`,
                zIndex: 1
            }}>
                <div style={{ position: 'relative', width: '400px', height: '400px' }}>
                    <Image
                        src="/Hexagon Image.png"
                        alt="Hexagon Group"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>
            </div>
        </>
    );
};

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const router = useRouter();

    useEffect(() => {
        for (const c in window.cardano) {
            console.log(c);
        }
    }, []);

    /**
     * Refrain from doing fake loading.
     * @param e 
     */
    const handleNavigate = async (e: React.MouseEvent) => {
        e.preventDefault();
        // setIsLoading(true);
        
        // // Start progress animation
        // const interval = setInterval(() => {
        //     setProgress((prev) => {
        //         if (prev >= 100) {
        //             clearInterval(interval);
        //             return 100;
        //         }
        //         return prev + 5;
        //     });
        // }, 100);

        // // Navigate using the new router
        // setTimeout(() => {
        //     clearInterval(interval);
            router.push('/MINTSPEND');
        // }, 2000);
    };

    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            width: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'black',
            color: 'white',
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            left: 0
        }}>
            {/* Hexagon Groups */}
            <HexagonGroup position="top-left" rotation={0} scale={0.8} />
            <HexagonGroup position="top-right" rotation={90} scale={0.8} />
            <HexagonGroup position="bottom-left" rotation={270} scale={0.8} />
            <HexagonGroup position="bottom-right" rotation={180} scale={0.8} />

            <div className="text-center">
                <div style={{
                    marginBottom: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image
                        src="/aiken-logogen2.png"
                        alt="Aiken Logo"
                        width={250}
                        height={250}
                        priority
                    />
                </div>
                <h1 style={{
                    fontSize: '5rem',
                    fontWeight: 'bold',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                    marginBottom: '2rem',
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        height: '10px',
                        background: 'rgba(255, 255, 255, 0.3)',
                        filter: 'blur(10px)',
                        borderRadius: '50%'
                    }} />
                    <span style={{
                        position: 'relative',
                        background: 'linear-gradient(to bottom, #9d4edd 70%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        transform: 'perspective(500px) rotateX(10deg)',
                        paddingBottom: '5px',
                        zIndex: 1
                    }}>
                        <span style={{
                            position: 'absolute',
                            content: '""',
                            left: 0,
                            top: 0,
                            zIndex: -1,
                            color: '#592c81',
                            textShadow: `
                                1px 1px 0 #7b3eb3,
                                2px 2px 0 #6a359a,
                                3px 3px 0 #592c81
                            `
                        }}>AIKEN</span>
                        AIKEN
                    </span>
                    <span style={{
                        position: 'relative',
                        background: 'linear-gradient(to bottom, #3b82f6 70%, #7dd3fc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        transform: 'perspective(500px) rotateX(10deg)',
                        paddingBottom: '5px',
                        zIndex: 1
                    }}>
                        <span style={{
                            position: 'absolute',
                            content: '""',
                            left: 0,
                            top: 0,
                            zIndex: -1,
                            color: '#1e40af',
                            textShadow: `
                                1px 1px 0 #2563eb,
                                2px 2px 0 #1d4ed8,
                                3px 3px 0 #1e40af
                            `
                        }}>MINT AI</span>
                        MINT AI
                    </span>
                </h1>
                <div style={{
                    marginBottom: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    {isLoading && (
                        <div style={{ width: '300px' }}>
                            <div style={{
                                width: '100%',
                                height: '4px',
                                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                borderRadius: '2px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: `${progress}%`,
                                    height: '100%',
                                    backgroundColor: '#3b82f6',
                                    borderRadius: '2px',
                                    transition: 'width 0.3s ease-in-out'
                                }} />
                            </div>
                            <div style={{
                                textAlign: 'center',
                                fontSize: '0.875rem',
                                marginTop: '0.5rem',
                                color: '#3b82f6'
                            }}>
                                Loading MINTSPEND page... {progress}%
                            </div>
                        </div>
                    )}
                    <a 
                        href="/MINTSPEND"
                        onClick={handleNavigate}
                        style={{
                            padding: '1rem 2rem',
                            fontSize: '1.25rem',
                            color: 'white',
                            borderRadius: '0.5rem',
                            background: 'linear-gradient(to right, #3b82f6, #1d4ed8)',
                            border: '1px solid #3b82f6',
                            transition: 'all 0.3s ease',
                            display: 'inline-block',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        Go to NFT Generator
                    </a>
                </div>
                <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '200',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.4',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <p style={{ marginBottom: '1rem' }}>Welcome to The First AIKEN Smart Contract</p>
                    <p>NFT Generator and Minting Service</p>
                </div>
            </div>
        </div>
    );
}