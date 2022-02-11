import * as React from "react";
import { Link } from "react-router-dom";

// IMPORT MATERIAL UI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";

// IMPORT CUSTOM STYLES
import { useStyles } from "./PropertyInfoCard.style";

interface Args {
  uniqueID: number;
  bedroom: string;
  price: string;
  grossm2: string;
  availability: string;
  floor: string;
  apartment_id: string;
  blockNew: string;
  layout: string;
  aptNo: string;
  view: string;
}

const PropertyInfoCard: React.FC<Args> = (props) => {
  const classes = useStyles();

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={
        props.availability === "not available" ? classes.unavailable : ""
      }
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.blockNew?.charAt(0)}
          </Avatar>
        }
        title={`${props.apartment_id}`}
        subheader={`Rs. ${new Intl.NumberFormat("en-IN").format(+props.price)}`}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random/900×700/?property"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Philadelphia-Style Two-Family for Sale in Davis Square with Patio &
          Off-Street Parking
        </Typography>
        {props.bedroom && (
          <Typography>No. of Bedrooms: {props.bedroom}</Typography>
        )}
        {props.grossm2 && <Typography>Grossm2: {props.grossm2}</Typography>}
        {props.floor && <Typography>Floors: {props.floor}</Typography>}
        {props.aptNo && <Typography>AptNo: {props.aptNo}</Typography>}
        {props.view && <Typography>View: {props.view}</Typography>}
      </CardContent>

      <CardActions disableSpacing>
        <Link to={`${props.uniqueID}`}>
          <Button>See Property</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PropertyInfoCard;
