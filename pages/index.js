import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

export const Avatar = () => {
  return (
    <div>
      <Image
        className="rounded-full"
        src="/images/joe-1.jpg"
        height={160}
        width={160}
      />
    </div>
  );
};

export const DownloadButton = (props) => {
  return (
    <div
      className={`${props.bgcolor ? props.bgcolor : "bg-white"} ${
        props.color ? props.color : "text-black"
      } px-6 py-3 mt-5 mx-1.5 z-10 font-sans text-xs rounded-sm hover:drop-shadow-md hover:cursor-pointer`}
    >
      <Link href={props.href} target="_blank">
        <a>{props.label}</a>
      </Link>
    </div>
  );
};

export const Skill = (props) => {
  const color = props.color || 'bg-blue-500';

	return (
		<div className={`${props.color ? props.color : "bg-blue-500"} text-lg font-bold text-center text-white rounded-full mx-1 my-1 px-1`}>{props.label}</div>
	)
}

export default function Home() {
  return (
    <Layout>
      <section id="about" className="h-screen">
        <div className="h-4/6 bg-[url('/images/apple-black-coffee.jpg')] bg-cover bg-center">
          <div className="absolute h-4/6 w-full bg-black/70"></div>

          <div className="flex flex-col h-full justify-center items-center z-10">
            <Avatar />
            <h1 className="text-white text-5xl font-sans font-light tracking-wide z-10 mb-1.5">
              Joe Faulstick
            </h1>
            <h2 className="text-white text-2xl font-sans font-light z-10">
              Front End Developer, Full Stack Developer
            </h2>
            <div className="flex">
              <DownloadButton
                href="/assets/Joseph_Faulstick.docx"
                label="RESUME (.DOCX)"
                bgcolor="bg-zinc-100"
              />
              <DownloadButton
                href="/assets/Joseph_Faulstick.pdf"
                label="RESUME (.PDF)"
                bgcolor="bg-zinc-900"
                color="text-white"
              />
            </div>
          </div>
        </div>

        <div className="flex h-1/3 justify-center items-center pb-12">
          <div className="grid auto-rows-auto w-2/3 justify-center">
            <div className="grid grid-cols-2 gap-6 justify-center items-center">
              <div className="font-bold text-2xl">About</div>
              <div className="font-bold text-2xl">Information</div>
            </div>
            <div className="grid grid-cols-2 gap-6 justify-center mt-2">
              <div className="font-light text-sm">
                Hello! I am a software engineer skilled in both front-end and
                back-end solutions for web applications. Prior to becoming a
                software engineer, I spent 15 years in the video game industry
                as a producer and project manager where I have a proven track
                record for producing quality, award winning AAA titles such as
                BioShock and Civilization VI.
              </div>

              <div className="grid grid-rows-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-bold">Email:</div>
                  <div className="">jfaulstick@gmail.com</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-bold">Location:</div>
                  <div className="">Raleigh-Durham, NC.</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-bold">Language:</div>
                  <div className="">English</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="w-full flex flex-col bg-zinc-200 pt-24 justify-center items-center">
          <div className="flex justify-center">
            <div className="font-bold text-3xl mb-4">Skills</div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-3 items-center pb-12">
            <Skill label="HTML" color="bg-orange-500" />
            <Skill label="CSS"  />
            <Skill label="Sass / PostCSS" color="bg-green-600" />
            <Skill label="JavaScript" color="bg-orange-500" />
            <Skill label="TypeScript" />
            <Skill label="React" color="bg-green-600" />
            <Skill label="AngularJS / Angular" color="bg-orange-500" />
            <Skill label="jQuery" />
            <Skill label="Jest / Jasmine / Karma" color="bg-green-600" />
            <Skill label="NodeJS" color="bg-orange-500"/>
            <Skill label="MongoDB" />
            <Skill label="MySQL" color="bg-green-600" />
          </div>
        </div>
      </section>

			<section id="experience">
				<div className="h-screen w-full bg-white">
				</div>
			</section>
    </Layout>
  );
}
