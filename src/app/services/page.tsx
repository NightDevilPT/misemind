import BannerFrame from '@/components/Banner'
import PageBanner from '@/components/PageBanner'
import ServiceComponent from '@/components/ServiceComponent'
import React from 'react'

const page = () => {
  return (
	<div className={`w-full h-auto`}>
		<PageBanner title="services" />
		<ServiceComponent />
	</div>
  )
}

export default page