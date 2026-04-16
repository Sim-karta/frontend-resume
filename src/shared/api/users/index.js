import localAPI from "./local";
import serverAPI from "./server";

const isLocal = import.meta.env.VITE_STAIC_BACKEND === 'true';

const usersAPI = isLocal ? localAPI : serverAPI;

export default usersAPI;