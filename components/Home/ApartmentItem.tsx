import { Image, ImageURISource } from "react-native";

interface ApartmentItemProps {
    image: string,
    title: string,
    location: string,
    ammenities: Array<string>
}

export function ApartmentItem({image, title, location, ammenities}: ApartmentItemProps) {
    return(
        <Image
        source={{ uri: image}}
        style={{
          resizeMode: "cover",
          width: "100%",
          height: 250,
          borderRadius: 10
        }}
      />
    )
}