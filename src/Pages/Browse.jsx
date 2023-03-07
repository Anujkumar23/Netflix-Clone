import React from 'react'
import { ENDPOINT } from '../../common/endpoints'

import ContentRow from '../component/ContentRow'


function Browse() {
  
  return (
    <section >
        <section>
            image banner
        </section>
      <ContentRow title="New & Popular"  endpoint={ENDPOINT.MOVIES_POPULAR}/>
      <ContentRow title="Top Rated"  endpoint={ENDPOINT.MOVIES_TOP_RATED}/>
      <ContentRow title="Now Playing"  endpoint={ENDPOINT.MOVIES_NOW_PLAYING}/>

    </section>
  )
}

export default Browse