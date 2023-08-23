import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image="/bootex1.jpg" title="male boot" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Boot
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Boots are a type of footware
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Button!</Button>
        <Button size="small">Another one!</Button>
      </CardActions>
    </Card>
  );
}
