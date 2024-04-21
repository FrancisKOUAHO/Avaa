'use client'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import MaxWidthWrapper from '@/app/(landing)/components/MaxWidthWrapper'
import Footer from '@/app/(landing)/components/Footer'
import Navbar from '@/app/(landing)/components/Navbar'
import Pricing from '@/app/(landing)/components/pricing/pricing'
import { useEffect, useState } from 'react'

const Home = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <>
          <Navbar />

          {/* Hero */}
          <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
            <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
              <p className="text-sm font-semibold text-gray-700">
                Essayez Plumera gratuitement
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
              <span className="text-blue-600">Facturez</span> sans prise de tête

            </h1>

            <p className="mt-5 max-w-prose text-lg text-zinc-700 sm:text-2xl">
              Avec Plumera, gérez vos factures en toute simmplicité grâce à nos outils d'automatisation.
            </p>

            <Link
              className={cn(
                buttonVariants({
                  size: 'lg',
                  className: 'mt-5',
                }),
                'text-lg',
              )}
              href={'/dashboard'}
            >
              Créez votre première facture
            </Link>
          </MaxWidthWrapper>

          {/* Value Prop */}
          <div>
            <div className="relative isolate">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
                />
              </div>

              <div>
                <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
                  <div className="mt-8 flow-root sm:mt-16">
                    <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                      <Image
                        src="/dashboard-preview.png"
                        alt="product preview"
                        width={955}
                        height={808}
                        quality={100}
                        className="rounded-md bg-special p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <MaxWidthWrapper>
            <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-20 sm:mt-40 sm:gap-40 ">
              {/* Intro */}
              <div>
                <div className="mb-6 px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                      Commencez à créer vos factures en 2 clicks
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      Automatisez et sécurisez votre processus de facturation
                    </p>
                  </div>
                </div>
                {/* steps */}

                <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
                  <li className="md:flex-1">
                    <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                      <span className="text-sm font-medium text-blue-600">
                        Etape 1
                      </span>
                      <span className="text-xl font-semibold">
                        Créez un compte
                      </span>
                      {/* <span className="mt-2 text-zinc-700">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span> */}
                    </div>
                  </li>
                  <li className="md:flex-1">
                    <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                      <span className="text-sm font-medium text-blue-600">
                        Etape 2
                      </span>
                      <span className="text-xl font-semibold">
                        Récuperez <span className="text-blue-600">Automatiquement</span>{' '}
                        vos données entreprise et celle du <span className="text-blue-600">Client</span>
                      </span>
                    </div>
                  </li>
                  <li className="md:flex-1">
                    <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                      <span className="text-sm font-medium text-blue-600">
                        Etape 3
                      </span>
                      <span className="text-xl font-semibold">
                        Ajoutez votre tarif et téléchargez votre facture !
                      </span>
                      {/* <span className="mt-2 text-zinc-700">

              </span> */}
                    </div>
                  </li>
                </ol>
              </div>

              {/* Scenarios */}
              <div>
                <div className="mb-6 px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                      Ne perdrez plus de temps à facturer !
                    </h2>
                    {/*<p className="mt-4 text-lg text-gray-600">*/}
                    {/*  */}
                    {/*</p>*/}
                  </div>
                </div>
                {/* steps */}

                <div className="flex items-center justify-center">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                      <CardTitle>Simplifiez votre comptabilité</CardTitle>
                      <CardDescription className="mb-3 text-center">
                        Ne vous occupez plus de gérer vos factures, de chercher differentes informations. Ayez un visuel clair de vos revenus.
                      </CardDescription>
                      <Image
                          src="/statistics.png"
                        alt="statistics"
                        width={128}
                        height={128}
                        quality={100}
                      />
                    </Card>
                    <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                      <CardTitle>Optimisez vos gains</CardTitle>
                      <CardDescription className="mb-3 text-center">
                        Nous mettons des outils toujours plus puissant pour trouver comment optimiser au mieux vos gains.
                      </CardDescription>
                      <Image
                        src="/google-docs.png"
                        alt="doc"
                        width={128}
                        height={128}
                        quality={100}
                      />
                    </Card>

                    <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                      <CardTitle>Gagnez du temps</CardTitle>
                      <CardDescription className="mb-3 text-center">
                        Ne perdez plus de temps à déclarer vos revenus et retrouvez votre suivi des temps sur le même outil.
                      </CardDescription>
                      <Image
                          src="/hour-glass.png"
                        alt="time"
                        width={128}
                        height={128}
                        quality={100}
                      />
                    </Card>
                  </div>
                </div>
                {/*<div className="mb-6 px-6 lg:px-8">*/}
                {/*  <div className="mx-auto max-w-2xl text-center">*/}
                {/*    <p className="mt-4 text-lg text-gray-600">*/}
                {/*      and many more...*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
              {/*  Pricing */}
              <Pricing />
              {/* Pricing  */}

              {/* Powered By */}
              {/*<div>*/}
              {/*  <div className="mb-6 px-6 lg:px-8">*/}
              {/*    <div className="mx-auto max-w-2xl sm:text-center">*/}
              {/*      <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">*/}
              {/*        Powered by*/}
              {/*      </h2>*/}
              {/*      <p className="mt-4 text-lg text-gray-600">*/}
              {/*        These are the technologies behind the scene that make*/}
              {/*        Plumera possible*/}
              {/*      </p>*/}
              {/*    </div>*/}
              {/*  </div>*/}

              {/*  <div className="flex items-center justify-center">*/}
              {/*    <div className="flex flex-col gap-6 md:flex-row">*/}
              {/*      <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">*/}
              {/*        <CardTitle>Whisper AI</CardTitle>*/}
              {/*        <CardDescription className="mb-3 text-center">*/}
              {/*          Speech to text*/}
              {/*        </CardDescription>*/}
              {/*        <Image*/}
              {/*          src="/mic.webp"*/}
              {/*          alt="cafe scenario"*/}
              {/*          width={128}*/}
              {/*          height={128}*/}
              {/*          quality={100}*/}
              {/*          className="rounded-xl"*/}
              {/*        />*/}
              {/*      </Card>*/}
              {/*      <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">*/}
              {/*        <CardTitle>GPT 4</CardTitle>*/}
              {/*        <CardDescription className="mb-3 text-center">*/}
              {/*          Comprehensive prompts and responses*/}
              {/*        </CardDescription>*/}
              {/*        <Image*/}
              {/*          src="/openai.webp"*/}
              {/*          alt="cafe scenario"*/}
              {/*          width={128}*/}
              {/*          height={128}*/}
              {/*          quality={100}*/}
              {/*          className="rounded-xl"*/}
              {/*        />*/}
              {/*      </Card>*/}

              {/*      <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">*/}
              {/*        <CardTitle>WebSpeech</CardTitle>*/}
              {/*        <CardDescription className="mb-3 text-center">*/}
              {/*          Text to speech*/}
              {/*        </CardDescription>*/}
              {/*        <Image*/}
              {/*          src="/speaker.webp"*/}
              {/*          alt="cafe scenario"*/}
              {/*          width={128}*/}
              {/*          height={128}*/}
              {/*          quality={100}*/}
              {/*          className="rounded-xl"*/}
              {/*        />*/}
              {/*      </Card>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/* Feedback */}
              {/*<div>*/}
              {/*  <div className="mb-6 px-6 lg:px-8">*/}
              {/*    <div className="mx-auto max-w-2xl sm:text-center">*/}
              {/*      <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">*/}
              {/*        Feedback*/}
              {/*      </h2>*/}
              {/*      <p className="mt-4 text-lg text-gray-600">*/}
              {/*        What are people saying about Plumera*/}
              {/*      </p>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*  /!* steps *!/*/}

              {/*  <div>*/}
              {/*    <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">*/}
              {/*      <div className="flow-root">*/}
              {/*        <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">*/}
              {/*          <Image*/}
              {/*            width={2556}*/}
              {/*            height={1436}*/}
              {/*            quality={100}*/}
              {/*            src="/tweet_collage.png"*/}
              {/*            alt="Header image"*/}
              {/*            className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"*/}
              {/*          />*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </MaxWidthWrapper>

          <Footer />
        </>
      )}
    </>
  )
}

export default Home