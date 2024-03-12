import React from 'react'

const LoadingLayout = () => {
  return (
	<div className={`w-full h-full fixed left-0 top-0 bg-primary-bg flex justify-center items-center`}>
		<div className='loader'></div>
	</div>
  )
}

export default LoadingLayout