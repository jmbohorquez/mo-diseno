
import Head from 'next/head'
import Image from 'next/image'

import Logo from '../public/images/logo.svg'

export default function Home() {
    return (
        
        <>
            <Head>
                <title>MO Diseño y Arquitectura</title>
                <meta name="description" content="servicio de construcción instalaciones, remodelaciones y construcciones"></meta>
            </Head>
            <main className="">
                <Image 
                    alt="MO Diseño y arquitectura"
                    src="/images/mo-bg.jpg"
                    layout="fill"
                    objectFit="contain"
                />
            </main>
        </>
        
    )
}
