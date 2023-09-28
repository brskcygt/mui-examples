import { Checkbox } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomCheckbox = styled(Checkbox)(({theme:T})=>({
    color: T.status.danger,
    '&.Mui-checked':{
        color: T.status.danger
    }
}))