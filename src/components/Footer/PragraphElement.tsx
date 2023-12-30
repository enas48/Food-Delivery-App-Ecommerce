import React from 'react'
import { Typography } from "@material-tailwind/react";

interface Props {
    type: string,
    body: string
    title: string
    dir: string
}
const defaultProps: Props = {
    type: 'body',
    body: '',
    title: '',
    dir: 'row'
}
const PragraphElement = (props: Props) => {
    return (
        <>
            {props.type === 'title' && <Typography
                variant="small"
                className="mb-3 text-left font-bold text-lg md:text-xl text-[#2B3755]"
            >
                {props.title}
            </Typography>
            }

            {props.type === 'body' &&
                <div className={`${props.dir === 'col' ? 'flex-col' : ''}flex text-left flex-wrap gap-1 py-1.5`}>
                    <Typography
                        color="gray"
                        className=" font-bold text-base  mb-3 text-gray-700"
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        color="gray"
                        className="font-normal text-base  mb-3 text-gray-700"
                    >
                        {props.body}
                    </Typography>
                </div>
            }
        </>
    )
}

PragraphElement.defaultProps = defaultProps

export default PragraphElement