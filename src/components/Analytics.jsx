import laptop from "../assets/laptop.jpg"


export default function Analytics() {
    return(

        <div className="w-full  bg-white text-black px-16 py-5" >
            <div className=" max-width-[11240px] grid md:grid-cols-2 ">
              
                <img src={laptop} alt="/" className="w-[500px] mx-10 my-10 ml-10  hover:scale-105 duration-500 " />


                <div className="flex flex-col justify-center ">
                <h4 className=" font-bold text-green-500 md:text-4xl sm:text-2xl text-1xl"> Data Analysis Dashboard</h4>
                          
         <p className="p-2 animate-pulse ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black text-green-500 mx-auto w-[300px] h-10  rounded-md font-bold m-8 hover:scale-105 duration-500"> Get Started</button>
                
                </div>
                </div>
            </div>
        
    )
}