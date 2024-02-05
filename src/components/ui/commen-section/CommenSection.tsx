import React from 'react'

interface Props {
    title?: string
}
function CommenSection(props: Props) {
    return (
        <section className='commen-section'>
            <div className='px-6 max-w-screen-xl  w-full mx-auto'>
                <h2 className='text-white  text-2xl font-semibold'>{props.title}</h2>
            </div>
        </section>
    )
}

export default CommenSection