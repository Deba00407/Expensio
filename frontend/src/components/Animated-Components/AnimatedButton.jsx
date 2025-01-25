import React from 'react'
import { Button } from '@mui/material'

function AnimatedButton({
    content = "Button",
    type = "button"
}) {
    return (
        <Button
            type={type}
            variant="contained"
            sx={{
                width: '100%',
                backgroundColor: 'black',
                color: 'white',
                paddingY: 1,
                paddingX: 2,
                borderRadius: 'lg',
                marginTop: 4,
                '&:hover': {
                    backgroundColor: '#74AA9C',
                },
                '&:active': {
                    transform: 'translateY(3px)',
                },
                transition: 'all 0.3s',
            }}
        >
            {content}
        </Button>
    )
}

export default AnimatedButton
