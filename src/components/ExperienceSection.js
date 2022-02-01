import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';

const ExperienceSectionStyles = styled.div`
  padding: 10rem 0;
  textalign: center;
  .experience__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .experience__info {
    width: 100;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    margin-top: 5rem;
    border-radius: 12px;
  }
`;

export default function ExperienceSection() {
  return (
    <ExperienceSectionStyles>
      <div>
        <div className="container">
          <SectionTitle heading="My experience" subheading="skills earned" />
        </div>
        <h1>Hello from experiece</h1>
        <div className="experiece__wrapper">
          <SwitchTransition>
            <CSSTransition>
              <div className="experience__info">
                <div className="experience__heading">
                  <p>COMPANY</p>
                  <p>Role</p>
                </div>
                <div className="experience__content">
                  <p className="experience__duties">Duties</p>
                  <PText>What i did as i worked over there</PText>
                  <p>WHAT I DID</p>
                  <p className="experience__startstop">START AND STOP</p>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </ExperienceSectionStyles>
  );
}
