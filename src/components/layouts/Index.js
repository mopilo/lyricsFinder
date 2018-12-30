import React, {Fragment} from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';



export const Index = () => {
    return(
        <Fragment>
            <Search/>
            <Tracks/>
        </Fragment>
    )
}