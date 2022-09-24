import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    margin: 5,
    alignItems: "center"
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft:6,
    borderWidth:1.6,
    borderColor: '#ff8501'
  },
  text: {
    color: "white",
    marginLeft: 5,
    fontWeight: '700',
  },
  PostHeaderComponent: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  elipses: {
    color: 'white',
    fontWeight: '900'
  },
  postImage: {
    height: 100,
    resizeMode: 'contain',
    
  }
})