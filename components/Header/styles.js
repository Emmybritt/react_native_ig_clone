import { StyleSheet } from "react-native";

export default StyleSheet.create({
  logo: {
    height: 50,
    width:100,
    resizeMode: "contain"
  },
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height:30,
    resizeMode: 'contain',
    marginLeft:10
  },
  unredBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  unredBadgeText: {
    color: "white",
    fontWeight: "600"
  }
})