// import { useLanyard } from "use-lanyard";
// import { motion } from "framer-motion";

// const Spotify = () => {
//     const { data: user } = useLanyard("705665813994012695");

//     if (!user || !user.spotify) {
//         return null;
//     }

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: -100 }}
//             transition={{ duration: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
//             className="fixed left-6 -bottom-20 w-[20rem] h-[7rem] hidden lg:flex flex-col items-start justify-start"
//         >
//             <h1 className="text-black dark:text-gray-100 font-semibold text-base mb-2 flex items-center justify-center">
//                 Listening to Spotify
//                 <span className="ml-2 w-2 h-2">
//                     <span className="absolute w-2 h-2 bg-red-600 rounded-full animate-ping" />
//                     <span className="absolute w-2 h-2 bg-red-600 rounded-full" />
//                 </span>
//             </h1>

//             <div className="w-full h-[6rem] flex flex-row items-center justify-start">
//                 <img
//                     src={user.spotify.album_art_url}
//                     className="w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none"
//                     alt={user.spotify.album}
//                 />
//                 <div className="w-56 h-full flex flex-col items-start justify-center">
//                     <a
//                         href={`https://open.spotify.com/track/${user.spotify.track_id}`}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="w-full font-medium text-gray-900 dark:text-[#e1eafd] hover:underline truncate"
//                     >
//                         {user.spotify.song}
//                     </a>
//                     <p className="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate">
//                         {user.spotify.artist}
//                     </p>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default Spotify;

// Description
// This is a React component called Spotify that displays information about the user's current Spotify listening status.

// It uses two external libraries imported at the top: use-lanyard and framer-motion.

// use-lanyard is a library that allows React applications to access the Lanyard API, which is a service that provides real-time updates on a user's Discord status and Spotify activity. In this component, useLanyard("705665813994012695") is called to retrieve data about the user with the Discord ID of "705665813994012695".

// framer-motion is a library that provides tools for animating components in React. In this component, it's used to animate the appearance of the motion.div container when the component is mounted.

// The component checks if the user object has been retrieved and if the user is currently listening to Spotify before rendering the component. If the user is not listening to Spotify, the component returns null.

// If the user is listening to Spotify, the component renders a container with the album artwork, song title, and artist name. The album artwork is displayed as an image, and the song and artist names are displayed as text. The component also includes some styling and animation to enhance the user interface.
export {};
