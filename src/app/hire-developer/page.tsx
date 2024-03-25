import HireDeveloperComponents from '@/components/HireDeveloperComponent'
import PageBanner from '@/components/PageBanner'
import React from 'react'

const page = () => {
  return (
	<div className={`w-full h-auto`}>
		<PageBanner title="Hire Developer" />
    <HireDeveloperComponents />
	</div>
  )
}

export default page