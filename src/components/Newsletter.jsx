


export default function Newsletter(){
    return(
        <div className="w-full text-white ">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="  lg:col-span-2 mx-auto my-20 ">
                  <h1 className="font-serif font-bold md:text-3xl sm:text-2xl text-1x1 ">want tricks and flicks to optimize your flow</h1>
                  <p>signup to our Newsletter and let us keep you up to date</p>
                </div>

                
                <div className="flex flex-col  w-full">
                <div className="my-10 mx-auto p-4 items-center" >
                    <input
                    className="mx-4 flex text-black rounded-lg w-[350px] h-16 sm: width-[450px] width-[300px]"
                    type="email"
                    placeholder=" Enter your email  "
                    />

                    <button className=" m-6 bg-green-500 text-1x1 rounded-md w-[350px] h-10 sm: width-[150px] ">Subscribe</button>
                    <p className=" m-6">
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>

                    </div>
                </div>



            </div>
</div>
    )
}