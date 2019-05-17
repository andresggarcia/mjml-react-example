import React from 'react';
import { readFileSync } from 'fs';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlGroup,
  MjmlImage,
  MjmlStyle,
  MjmlText
} from 'mjml-react';
import Title from './components/Title'

const css = readFileSync('./assets/styles.css').toString();

export const generate = () => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
        <MjmlStyle>{`
          .blue-column {
            background-color: blue;
          }
          .red-column {
            background-color: red;
          }
        `}</MjmlStyle>
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection>
          <MjmlGroup>
            <MjmlColumn>
              <MjmlImage width="137px" height="185px" src="https://mjml.io/assets/img/easy-and-quick.png" />
              <MjmlText align="center">Item 1</MjmlText>
              <MjmlText align="center">Write less code, save time and code more efficiently with MJML’s semantic syntax.</MjmlText>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage width="137px" height="185px" src="https://mjml.io/assets/img/responsive.png" />
              <MjmlText align="center">Item 2</MjmlText>
              <MjmlText align="center">Write less code, save time and code more efficiently with MJML’s semantic syntax.</MjmlText>
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>

        <MjmlSection>
          <MjmlGroup>
            <MjmlColumn>
              <MjmlText align="center" >
                <Title text="CustomComponent" />
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlText align="center">
                <Title text="CustomComponent" />
              </MjmlText>
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>

        <MjmlSection>
          <MjmlGroup>
            <MjmlColumn cssClass="blue-column">
              <MjmlText>I am blue</MjmlText>
            </MjmlColumn>
            <MjmlColumn cssClass="red-column">
              <MjmlText>I am red</MjmlText>
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};
