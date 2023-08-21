import React from 'react'
import { IFlex } from '../types/Flex'
import { StyledFlex } from '../StyledComponents/Flex'

function Flex({ children, ...restProps }: Partial<IFlex>) {
    return (
        <StyledFlex {...restProps}>{children}</StyledFlex>
    )
}

export { Flex }