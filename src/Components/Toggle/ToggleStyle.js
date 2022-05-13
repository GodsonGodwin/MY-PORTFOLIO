import styled from 'styled-components'

export const IconWrapper =  styled('div')`
display: flex;
justify-content: space-between;
border : 3px solid var(--emerald);
border-radius: 1rem;
padding: 2px;
position: relative;
cursor: pointer;



*{
    width: 1rem;
    height: 1rem;
    color: var(--emerald);   
}

` 
export const ToggleButton = styled('div')`
border-radius: 100%;
background: var(--emerald);
position: absolute;

width: 1rem;
    height: 1rem;


`