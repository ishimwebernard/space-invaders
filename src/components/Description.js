const description = ({ videoName, videoDescription }) =>{
    return (
       <div>
           <p className="text-xl font-medium text-indigo-700 mt-4">{videoName}</p>
           <p className="text-gray-500 mt-2 font-light">{videoDescription}</p>
       </div>
    )
}
export default description;