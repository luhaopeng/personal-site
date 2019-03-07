import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
        max-width: 960px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        max-width: 720px;
    }
    @media (max-width: 576px) {
        max-width: 540px;
    }
`

export const Link = styled.a.attrs({
    target: '_blank',
    rel: 'noopener noreferrer'
})`
    color: inherit;

    &:hover,
    &:focus {
        color: inherit;
        text-decoration: none;
    }
`