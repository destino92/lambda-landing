import Image from "next/image"

export default function Home() {
  return (
    <div className="body-wrapper hs-content-id-185539796766 hs-landing-page hs-page">
      <main id="main-content">
        <div className="">
          <div className="py-16 bg-[#0b0b0b] text-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h1 className="text-5xl font-normal mb-4">Voulez vous travailler pour Tiktok ou Tesla ?</h1>
              <p className="text-lg mb-8">
                Transformez votre avenir avec notre programme d&apos;intelligence artificielle et de cloud.
              </p>
              <a
                href="https://wa.link/2iwfmi"
                className="inline-block bg-[#4435F6] hover:bg-[#00A38D] active:bg-[#50F3DD] text-white font-normal py-2 px-6 rounded-full text-xl"
              >
                Contactez-nous sur WhatsApp maintenant
              </a>
            </div>
          </div>

          <div className="py-16 bg-slate-100">
            <div className="flex flex-wrap items-center container mx-auto px-4 md:px-44">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="https://49147926.fs1.hubspotusercontent-na1.net/hub/49147926/hubfs/IMG-20250118-WA0005.jpg?width=914&height=1280&name=IMG-20250118-WA0005.jpg"
                  alt="Formation de pointe"
                  width={914}
                  height={1280}
                  className="max-w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-normal mb-4">Formation de pointe</h2>
                <p>
                  Chez AI SCALER, nous offrons un programme de formation unique qui prépare les jeunes aux défis du
                  monde numérique. Notre AI SCALER BOOTCAMP vous fournit les compétences nécessaires pour exceller dans
                  le domaine du cloud et de l&apos;intelligence artificielle. Avec des formateurs issus de géants comme
                  TikTok, Yahoo et Apple, vous apprendrez directement des experts de l&apos;industrie.
                </p>
              </div>
            </div>
          </div>

          <div className="py-16">
            <div className="flex flex-wrap items-center container mx-auto px-4 md:px-44">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-normal mb-4">Un emploi garanti</h2>
                <p>
                  Nous croyons fermement que la formation doit mener à l&apos;emploi. C&apos;est pourquoi notre programme garantit
                  des opportunités d&apos;emploi dans des entreprises prestigieuses comme TESLA et d&apos;autres leaders du
                  secteur. Grâce à notre réseau mondial, vous aurez accès à des postes à distance, vous permettant de
                  travailler depuis n&apos;importe où dans le monde, y compris aux États-Unis.
                </p>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <Image
                  src="https://49147926.fs1.hubspotusercontent-na1.net/hub/49147926/hubfs/IMG-20250118-WA0003.jpg?width=914&height=1280&name=IMG-20250118-WA0003.jpg"
                  alt="Un emploi garanti"
                  width={914}
                  height={1280}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="py-16 bg-slate-100">
            <div className="max-w-4xl container mx-auto px-4">
                <h2 className="text-3xl font-normal mb-4">Connectez-vous avec nous</h2>
                <p className="mb-8">
                    Prêt à transformer votre avenir? Notre équipe est là pour vous accompagner à chaque étape.
                    Contactez-nous dès maintenant au +242065437365 et découvrez comment vous pouvez commencer votre parcours
                    vers une carrière réussie dans l&apos;intelligence artificielle et le cloud. Ne laissez pas passer cette
                    opportunité exceptionnelle!
                </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-8">
        <div className="container text-center mx-auto px-4">
            <a
                href="https://wa.link/2iwfmi"
                className="inline-block bg-[#4435F6] hover:bg-[#00A38D] active:bg-[#50F3DD] text-white font-normal py-2 px-6 my-24 rounded-full text-xl"
            >
                Contactez-nous sur WhatsApp maintenant
              </a>
            <p className="text-center">Copyright © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

