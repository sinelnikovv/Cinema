import { Box} from "@mui/material";

import { useGetRandomTitlesQuery } from "../../RTK/api";
import styles from "./TopRandom.module.scss";
import Typography from "@mui/material/Typography/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";

import Link from "@mui/material/Link";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";
const wrapper = {
  height: "100vh",
  display: "flex",
  pt: "80px",
  flexDirection: "column",
  alignItems: "stretch",
};

const TopRandom = () => {
  const { data, isSuccess } = useGetRandomTitlesQuery({
    list: "top_boxoffice_200",
    limit: 5,
    info: "custom_info",
  });
  const theme = useTheme();  

  const RandomItem = (props) => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "10% 15% 15% 15%",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              border: 1,
              borderRadius: 10,
              px: 2,
              py: 1,
              alignSelf: "flex-start",
              borderColor: "primary.main",
              color: "primary.main",
            }}
          >
            {props.item.titleType.text}
          </Typography>
          <Typography
            component={"h2"}
            variant={"h3"}
            sx={{ fontWeight: "600", pb: 5, pt: 1 }}
          >
            {props.item.originalTitleText.text}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>
              {Math.floor(props.item.runtime.seconds / 60 / 60)}h
              {Math.round(
                (props.item.runtime.seconds / 60 / 60 -
                  Math.floor(props.item.runtime.seconds / 60 / 60)) *
                  60
              )}
              m
            </Typography>
            <CircleIcon sx={{ fontSize: 10, mx: 1 }} />
            <Typography>{data.results[0].releaseYear.year}</Typography>
            <CircleIcon sx={{ fontSize: 10, mx: 1 }} />
            <Typography sx={{ display: "flex" }}>
              {props.item.genres.genres.map((genre, index) => (
                <Typography>
                  {genre.text}

                  {index !== props.item.genres.genres.length - 1 && (
                    <CircleIcon sx={{ fontSize: 10, mx: 1 }} />
                  )}
                </Typography>
              ))}
            </Typography>
          </Box>
          <Typography sx={{ my: 2 }}>
            {props.item.plot.plotText.plainText}
          </Typography>
          <Tooltip
            title={
              <Typography fontSize={18}>
                {props.item.ratingsSummary.aggregateRating}
              </Typography>
            }
            placement="top"
            arrow
          >
            <Box sx={{ display: "inline-flex", my: 4 }}>
              <Rating
                max={10}
                size="large"
                precision={0.1}
                value={props.item.ratingsSummary.aggregateRating}
                readOnly
              />
            </Box>
          </Tooltip>
          <Link
            sx={{ border: "1px solid", borderRadius: 10, py: 1, px: 2 }}
            target="_blank"
            href={props.item.trailer}
          >
            Watch trailer
          </Link>
        </Box>

        <Box sx={{ position: "relative", height: "100%" }}>
          <img
            className={styles.img}
            src={props.item.primaryImage.url}
            alt=""
          />
          <div className={styles.gradient}></div>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={wrapper}>
      {isSuccess && (
        <Carousel
          autoPlay
          duration={2000}
          stopAutoPlayOnHover
          interval={8000}
          sx={{ flexGrow: 1 }}
          animation={"slide"}
          indicatorContainerProps={{
            style: {
              position: "absolute",
              bottom: "30%",
              left: "15%",
              textAlign: "left",
            },
          }}
          indicatorIconButtonProps={{
            style: {
              padding: "10px",
              color: theme.palette.primary.main,              
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: theme.palette.primary.dark,
              transform: "scale(2)"
            },
          }}          
        >
          {data.results.map((item) => (
            <RandomItem key={item.id} item={item} />
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default TopRandom;
