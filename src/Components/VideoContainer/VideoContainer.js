import React, { useState }  from 'react';
import Video from 'react-native-video'
import { TouchableOpacity } from 'react-native';

const VideoContainer = (props) => {

    const [pause,setPause] = useState(false);

    return (
        <TouchableOpacity onPress={()=>setPause(!pause)}>
        <Video source={{uri: props.url}}
        resizeMode={'cover'}
        playInBackground={false}
        playWhenInactive={true}
        paused={pause}
       style={{width:'100%',
       height:"100%",
       justifyContent:'center',
       alignContent:'center',}} />
       </TouchableOpacity>
    );
}


export default VideoContainer;
