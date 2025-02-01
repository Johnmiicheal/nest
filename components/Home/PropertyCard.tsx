import type React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { Heart,  LucideIcon,  LucideProps } from "lucide-react-native"

interface PropertyCardProps {
  title: string
  location?: string
  price?: number
  imageUrl: string
  priceRange?: string
  amenities?: {
    icon: LucideIcon,
    label: string
  }[]
  compact?: boolean
  onPress: () => void
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  imageUrl,
  priceRange,
  amenities,
  compact = false,
  onPress,
}) => {
  const formatPrice = (amount: number) => {
    return `₦${amount / 1000}k`
  }

  if (compact) {
    return (
      <TouchableOpacity style={styles.compactContainer} onPress={onPress}>
        <Image source={{ uri: imageUrl }} style={styles.compactImage} />
        <View style={styles.compactContent}>
          <Text style={styles.compactTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.priceRange}>{priceRange}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <TouchableOpacity style={styles.heartButton}>
          <Heart stroke="black" width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {location && <Text style={styles.location}>{location}</Text>}
        {amenities && (
          <View style={styles.amenities}>
            {amenities.map((amenity, index) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center', gap: 7, backgroundColor: "#FFC94119", paddingVertical: 5, paddingHorizontal: 8, borderRadius: 15 }} key={index}>
              <amenity.icon size={13} color="#FFC941" />
              <Text key={index} style={styles.amenity}>
                {amenity.label}
              </Text>
              </View>
            ))}
          </View>
        )}
        {price && (
          <View style={styles.priceContainer}>
            <View style={styles.priceWrapper}>
              <Text style={styles.priceLabel}>From</Text>
              <Text style={styles.price}>{formatPrice(price)}</Text>
              <Text style={styles.priceLabel}>/year</Text>
            </View>
            <TouchableOpacity style={styles.enquireButton}>
              <Text style={styles.enquireText}>Enquire</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 8,
  },
  amenities: {
    flexDirection: "row",
    gap: 7,
    marginBottom: 16,
  },
  amenity: {
    fontSize: 12,
    color: "#666666",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  priceLabel: {
    fontSize: 12,
    color: "#666666",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
  },
  enquireButton: {
    backgroundColor: "#FFD54F",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  enquireText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white"
  },
  // Compact styles
  compactContainer: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
  },
  compactImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 12
  },
  compactContent: {
    marginTop: 5,
    padding: 12,
    borderRadius: 12,
    height: 65,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  compactTitle: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 4,
  },
  priceRange: {
    fontSize: 12,
    color: "#A2A2A2",
  },
})

