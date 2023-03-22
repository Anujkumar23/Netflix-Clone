import React from 'react'
import Profiles from '../component/Profiles'

function Profile({edit=false}) {
  return (
    <article className=' grid min-h-screen place-content-center place-items-center'>
    <Profiles edit={edit}/>
    </article>)
}

export default Profile