// import React,{createContext,useContext, useState} from 'react'
// const PlacementContext=createContext();

// const PlacementProvider = ({children}) => {
//   const [user, setUser] = useState("");
//   const [data, setData] = useState("");
//   const [searchQuery, setSearchQuery] = useState('');
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedRemote, setSelectedRemote] = useState('');
//   const [selectedEmployetype, setSelectedEmployetype] = useState('');
//   const [selectedDatePosted, setSelectedDatePosted] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('');
//   return (
//     <PlacementContext.Provider value={{user,setUser,data,setData,searchQuery,setSearchQuery,jobs,setJobs,loading,setLoading,selectedRemote,setSelectedRemote,selectedEmployetype,setSelectedEmployetype,selectedDatePosted,setSelectedDatePosted,selectedLocation,setSelectedLocation}}>
//        {children}
//     </PlacementContext.Provider>
//   )
// }
// export const PlacementState=()=>{
//   return useContext(PlacementContext);
// }
// export default PlacementProvider;