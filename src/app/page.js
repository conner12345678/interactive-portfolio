import Image from "next/image";
import HomeContent from '../components/homeContent'
import Footer from '../components/footer'
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <div className="p-10 flex flex-col items-center">
      <NavBar />

      <div className="title-area flex flex-col items-center">
        <div className="absolute top-4 right-4 cursor-pointer">
          <div className="w-8 h-1 bg-[#4ade80] mb-2"></div>
          <div className="w-8 h-1 bg-[#4ade80] mb-2"></div>
          <div className="w-8 h-1 bg-[#4ade80]"></div>
        </div>

        <div className="image relative w-[20vw] h-[20vw]">
          <Image
            src="https://res.cloudinary.com/duehylw5k/image/upload/v1734143850/task-manager/cb0aal7zt4uyjwqkv7j7.jpg"
            alt="Image of me"
            fill
            className="object-cover rounded-full"/>
        </div>
        <div className="name text-[32px] text-center">
          <h1 className="text-[#F5F5F5]">Hi, I'm <span className="text-[#4ade80]">Conner Ehly</span> — an <span className="text-[#4ade80]">entry level web developer</span> with expertise in <span className="text-[#4ade80]">Python, Javascript, HTML, CSS, SCSS and Typescript</span>. Welcome to my portfolio! I'm excited to show you my work.</h1>
        </div>
        <hr className="my-6 border-t-2 border-[#4ade80] w-full"/>
      </div>

      <HomeContent title="My Projects" content={
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">

            <div className="bg-[#334155] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://res.cloudinary.com/duehylw5k/image/upload/v1734143850/task-manager/cb0aal7zt4uyjwqkv7j7.jpg"
                  alt="test pic"
                  fill
                  className="object-cover"
                  />
              </div>
              <h2 className="text-[f1f5f9] text-xl font-semibold">Test Project</h2>
              <p className="text-[#cbd5e1]">The desc</p>
            </div>

            <div className="bg-[#334155] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://res.cloudinary.com/duehylw5k/image/upload/v1734143850/task-manager/cb0aal7zt4uyjwqkv7j7.jpg"
                  alt="test pic"
                  fill
                  className="object-cover"
                  />
              </div>
              <h2 className="text-[f1f5f9] text-xl font-semibold">Test Project</h2>
              <p className="text-[#cbd5e1]">The desc</p>
            </div>

            <div className="bg-[#334155] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://res.cloudinary.com/duehylw5k/image/upload/v1734143850/task-manager/cb0aal7zt4uyjwqkv7j7.jpg"
                  alt="test pic"
                  fill
                  className="object-cover"
                  />
              </div>
              <h2 className="text-[f1f5f9] text-xl font-semibold">Test Project</h2>
              <p className="text-[#cbd5e1]">The desc</p>
            </div>

            <div className="bg-[#334155] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://res.cloudinary.com/duehylw5k/image/upload/v1734143850/task-manager/cb0aal7zt4uyjwqkv7j7.jpg"
                  alt="test pic"
                  fill
                  className="object-cover"
                  />
              </div>
              <h2 className="text-[f1f5f9] text-xl font-semibold">Test Project</h2>
              <p className="text-[#cbd5e1]">The desc</p>
            </div>

            <div className="col-span-full flex justify-center mt-8">
              <button className="bg-[#4ade80] rounded-lg py-1 border-3 border-black p-1 hover:bg-[#4ade65]">Learn more</button>
            </div>
          </div>
        </>}/>

        <HomeContent title="Breifly about me" content={
          <>
              <p className="text-center">stuff about me goes in here</p>
              <div className="col-span-full flex justify-center m-6">
                <button className="bg-[#4ade80] rounded-lg py-1 border-3 border-black p-1 hover:bg-[#4ade65]">Learn more</button>
              </div>
          </>}/>

        <Footer />
    </div>
  );
}
