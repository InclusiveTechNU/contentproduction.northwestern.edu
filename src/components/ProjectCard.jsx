import React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import PropTypes from "prop-types";

const ProjectCardOuterContainer = styled("div")`
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    margin-bottom: 4em;
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        margin-bottom: 2em;
    }

    &:hover {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
        transition: all 150ms ease-in-out;
    }
`;

const ProjectCardContainer = styled("div")`
    display: grid;
    grid-template-columns: 4fr 7fr;

    @media(max-width:950px) {
        grid-template-columns: 4.5fr 7fr;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-template-columns: 1fr;
    }

    &:hover {
        .ProjectCardAction {
            color: ${props => props.secondaryColor};
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            }
        }

        .ProjectCardContent::before {
            opacity: 0.02;
            transition: all 150ms ease-in-out;
        }

        .ProjectCardImageContainer::before {
            opacity: 0.2;
            transition: all 150ms ease-in-out;
        }
    }
`

const ProjectCardContent = styled("div")`
    background: white;
    padding: 4em 3em 2.25em 3em;
    position: relative;

    @media(max-width:950px) {
        padding: 3.25em 2.5em 2em 2.5em;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-row: 2;
    }
`

const ProjectCardCategory = styled("h6")`
    font-weight: 600;
    color: ${colors.grey600};
`

const ProjectCardTitle = styled("h3")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
`

const ProjectCardBlurb = styled("div")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 5em;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2.5em;
    }
`

const ProjectCardAction = styled("div")`
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;
    bottom: 45px;
    position: absolute;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }
`

const ProjectCardImageContainer = styled("div")`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        padding-top: 3em;
        max-height: 200px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${props => props.secondaryColor};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    img {
        height: 100%;
        width: 100%;

        @media(max-width:${dimensions.maxwidthTablet}px) {
            max-width: 300px;
        }
    }
`

const ProjectCardResources= styled("div")`
    text-align: left;
    background: white;
    width: 100%;
    h1 {
        font-size: 19px;
    }

`

const ProjectCard = ({ category, title, description, thumbnail, uid, color, secondaryColor, resources}) => (
    <ProjectCardOuterContainer>
        <ProjectCardContainer aria-label={ `Project: ${title[0].text}`} secondaryColor={secondaryColor} to={`/publications`}>
            <ProjectCardContent secondaryColor={secondaryColor} className="ProjectCardContent">
                <ProjectCardCategory aria-hidden="true">
                    {category[0].text}
                </ProjectCardCategory>
                <ProjectCardTitle aria-hidden="true">
                    {title[0].text}
                </ProjectCardTitle>
                <ProjectCardBlurb>
                    {RichText.render(description)}
                </ProjectCardBlurb>
                <ProjectCardResources>{RichText.render(resources)}</ProjectCardResources>
            </ProjectCardContent>
            <ProjectCardImageContainer aria-hidden="true" secondaryColor={secondaryColor} style={{background: color}} className="ProjectCardImageContainer">
                <img src={thumbnail.url} alt="" role="presentation"/>
            </ProjectCardImageContainer>
        </ProjectCardContainer>
    </ProjectCardOuterContainer>
)

export default ProjectCard;

ProjectCard.propTypes = {
    category: PropTypes.array.isRequired,
    thumbnail: PropTypes.object.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.array,
    resources: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired
}
