import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 16,
        margin:4,
    },
    firstContainer:{
      display:'flex',
      flex: 5,
    },
    middleContainer:{
        display:'flex',
        flexDirection:'column',
        flex:6.5,
        justifyContent:'space-evenly',
        alignItems:'baseline',
    },
    middleSubContainer:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    lastContainer:{
        flex:2.5,
        justifyContent:'center',
        alignItems:'flex-end',
    },
    image:{
        width: 95,
        height: 95,
        borderRadius: 100 / 2,
    },
    name:{
        fontSize: 20,
        textAlign:'left',
        color:'black',
        fontWeight:'bold',
    },
    isSoldOut:{
        color:'red',
        borderWidth:1,
        borderRadius:4,
        padding:4,
        borderColor:'red',
        fontSize:12,
    },
    year:{
        flex:0.5,
    },
    artist:{
        flex:0.5,
        color:'black',
        marginRight:8,
        flexWrap:'wrap',
    },
    album:{
        marginTop:8,
    }
});
