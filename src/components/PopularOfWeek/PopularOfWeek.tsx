import { Box} from "@mui/material";
import { useGetTitlesQuery } from "../../RTK/api";



const PopularOfWeek=()=>{
  const data = useGetTitlesQuery({list:"top_boxoffice_last_weekend_10"})
  console.log(data);
  
  return(
   <Box>
    data
    </Box>
  )
}

export default PopularOfWeek