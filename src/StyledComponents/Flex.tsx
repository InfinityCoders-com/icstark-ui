import { IFlex } from 'src/types/Flex'
import styled from 'styled-components'

export const StyledFlex = styled.div<Partial<IFlex>>`
    display: ${(props: Partial<IFlex>) => props.display || 'flex'};
    flex-direction: ${(props: Partial<IFlex>) => props.flexDirection ||  'column'};
    flex-wrap: ${(props: Partial<IFlex>) => props.flexWrap ||  'wrap'};
    justify-content: ${(props: Partial<IFlex>) => props.justifyContent || 'flex-start'};
    align-items: ${(props: Partial<IFlex>) => props.alignItems || 'flex-start'};
    align-content: ${(props: Partial<IFlex>) => props.alignContent || 'flex-start'};

`