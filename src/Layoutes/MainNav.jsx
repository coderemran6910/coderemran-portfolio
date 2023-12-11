import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";

const MainNav = () => {
    const menu =<>
    <li> <a className="font-extrabold tracking-widest  uppercase" href="#home">  Home  </a> </li>
    <li><a className="font-extrabold tracking-widest  uppercase"  href="#about" >  about  </a></li>
    <li><a className="font-extrabold tracking-widest  uppercase"  href="#projects" >  projects  </a></li>
    <li><a className="font-extrabold tracking-widest  uppercase"  href="#education" >  education  </a></li>
    <li><a className="font-extrabold tracking-widest  uppercase"  href="#blog" >  blog  </a></li>
    <li><a className="font-extrabold tracking-widest  uppercase"  href="#contacts" >  contacts  </a></li>

    {/* <NavLink><a href="home">Home</a></NavLink>
    
    <NavLink></NavLink> */}
    </>
    return (
        <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-black  bg-opacity-50 relative z-50 text-white  ">
      <div className="w-full mx-auto container">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="font-extrabold tracking-widest btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 text-xl uppercase tracking-widest text-black font-extrabold"> <span className="p-2 text-white bg-[#FF2B2B] text-3xl  rounded-full font-extrabold">C</span>oder|Emran </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
         {menu}
        </ul>
      </div>
      </div>
    </div>
    {/* Page content here */}

       <div className=" absolute">
       <Banner />
       <About />
       <Projects />
       </div>

    Content
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
    {menu}
    </ul>
  </div>
</div>
    );
};

export default MainNav;