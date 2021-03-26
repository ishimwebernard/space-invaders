const Header = () =>{

    return (
       <div id="top" className="px-10">
            <p className="sticky text-6xl">VIDEO<span className="text-indigo-700 font-bold">gallery</span></p>
            <h1 className="font-light text-indigo-500 ">Get exclusive playlist videos</h1>
            <button id="btn" className="bg-indigo-700 text-gray-100 px-4 py-2 uppercase font-medium focus:outline-none" onClick={()=>{
                document.getElementById('videos').style.display = "flex";
                console.log('Clicked');
            }}>Playlist</button>
       </div>
    )
}
export default Header;