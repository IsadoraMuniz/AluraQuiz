import Head from 'next/head';
import styled from 'styled-components';
import React, { useState } from 'react';
import {Router, useRouter} from 'next/router';
import db from '../../db.json';

import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 5%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Bey Queenz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
          <p>Buonasera, Katuxa !! </p>
            <p>Prepare-se para provar se você é fã de verdade desta grante tiva pertuti noi que é nossa Queen Bey! </p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <form onSubmit={function (e){
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >  
              <input
                onChange={function(e){
                  // name = e.target.value;
                  setName(e.target.value);
                }}
               placeholder='Qual é o nome dx bonitx?'/>
              <button type="submit" disabled={name.length === 0}>
                Bora, {name}
              </button>
            </form>
            
            
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <Footer />
      <GitHubCorner projectUrl="https://github.com/IsadoraMuniz" />
    </QuizBackground>
  );
}
