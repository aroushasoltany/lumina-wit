import { Center, createStyles, rem } from '@mantine/core';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import {STitle} from '../components/ServiceTitle'

const useStyles = createStyles((theme) => ({
  map: {
    height: rem(100),
    width: rem(100),
  },
  map_container: {
  height: 300,
  width: 800,
  marginLeft:150,

},

}));

const Services = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDB-OExor5WbV9Tk2OQ40PDs7I1fNqvGb4",
  });
  const centa = useMemo(() => ({ lat: -33.904035, lng: 151.080742 }), []);
  const { classes, theme } = useStyles();


return (
  <div><STitle />
  <div className={classes.map}> 
    {!isLoaded ? (
      <h1>Loading...</h1>
    ) : (

      <GoogleMap
        mapContainerClassName={classes.map_container}
        center={centa}
        zoom={10}
      />
    )}
  </div>
  </div>
);
};

export default Services;
