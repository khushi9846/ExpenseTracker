// styles.js

import { StyleSheet } from "react-native";
// styles sheet to store all the styles in one place
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    container: {
        backgroundColor: "#fff",
        height: "100%",
        marginTop: 50,
    },
    heading: {
        color: "green",
        fontSize: 25,
        padding:10,
        marginTop:10,
        textAlign: "center",
        fontWeight: "bold",
    },
  addButton: {
    padding: 10,
    margin: 10,
    backgroundColor: 'green',
    alignItems: 'center',
},
addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:15
},
    heading2: {
        color: "black",
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
    },
    heading3: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
    },
    label: {
        color: "black",
        fontSize: 16,
        textAlign: "left",
        fontWeight: "bold",
        marginLeft: 10,
    },
    expenseTile: {
        // column with 3 cells
        flexDirection: "row",
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "lightgrey",
        color:'black',
       fontFamily:'lucida grande',
        width: "95%",
        padding: 10,
        borderTopLeftRadius: 105, 
        borderTopRightRadius: 25, 
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 105,
        margin: 10,
    },
    expenseTileText: {
        fontSize: 20,
        width: "22%",
        color:'black',
     
        textAlign: "center",
    },
    formAdd: {
        // display: "none",
    },
    textInput: {
        borderRadius: 12,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
});
export default styles;
