import { FlatList, StyleSheet, Text, View ,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobaApi from '../../Utils/GlobalApi'

const Sliders = () => {
    const[TabContent,setContent] = useState()

    useEffect(()=>{
        recupContent()
    },[])
    const recupContent=()=>{
        GlobaApi.getSliders().then(resp=>{
            console.log('mes sliders',resp);
            setContent(resp.sliders)
        })
    }
    
  return (
    <View>
      <Text style={styles.heading}>Nos promotions</Text>
      <FlatList
        data={TabContent}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <View style={{marginRight:20}}>
                <Image source={{uri:item.image.url}} style={styles.lesImages}/>
            </View>
        )}
      />
    </View>
  )
}

export default Sliders

const styles = StyleSheet.create({
    lesImages:{
        width:270,
        height:150,
        borderRadius:15,
    },
    heading:{
        fontSize:20,
        fontFamily:'Roboto-Medium',
        marginBottom:10
    }

})