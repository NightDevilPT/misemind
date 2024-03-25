import BannerFrame from '@/components/Banner'
import ContactUsComponent from '@/components/ContactUsComponent'
import PageBanner from '@/components/PageBanner'
import ServiceComponent from '@/components/ServiceComponent'
import React from 'react'

const page = () => {
  return (
	<div className={`w-full h-auto`}>
		<PageBanner title="contact us" />
		<ContactUsComponent />
	</div>
  )
}

export default page