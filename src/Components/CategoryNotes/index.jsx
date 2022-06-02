import React from 'react'
import CategoryItem from '../CategoryItem'

const index = () => {
  return (
    <div className="flex-category">
      <CategoryItem 
        imgUrl="img/kozha_derevyannyy_fon_tekstura_shov_50420_240x320.jpg"
        link="" 
        title="YouTube links" 
        count="10 notes"/>
      <CategoryItem 
        imgUrl="img/kozha_derevyannyy_fon_tekstura_shov_50420_240x320.jpg"
        link="" 
        title="TikTok links" 
        count="7 notes"/>
      <CategoryItem 
        imgUrl="img/kozha_derevyannyy_fon_tekstura_shov_50420_240x320.jpg"
        link="" 
        title="Figma links" 
        count="20 notes"/>
      <CategoryItem 
        imgUrl="img/kozha_derevyannyy_fon_tekstura_shov_50420_240x320.jpg"
        link="" 
        title="Other links" 
        count="9 notes"/>
      <CategoryItem 
        imgUrl="img/kozha_derevyannyy_fon_tekstura_shov_50420_240x320.jpg"
        link="" 
        title="Other notes" 
        count="8 notes"/>
    </div>
  )
}

export default index
