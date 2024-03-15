
import { useEffect, useState } from "react";
import { getuserData } from "../../services/authenticate";
import { useSelector } from "react-redux";

const useUserData = () => {
  const sessionToken = useSelector(state => state.sessionToken);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (sessionToken) {
          const userData = await getuserData(sessionToken);
          setUserData(userData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
     
    fetchUserData();
  }, [sessionToken]);

  return userData;
};

export default useUserData;
