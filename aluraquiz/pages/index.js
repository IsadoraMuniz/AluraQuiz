/* eslint-disable max-len */
import Head from 'next/head';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Router, useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';

import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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
        <title>Bey Quinz</title>
      </Head>
      <QuizContainer>
        <motion.div animate={{ scale: 1 }} 
          initial={{ scale: 0 }} 
          transition={{ duration: 0.5, delay: 1 }} 
        >
          <QuizLogo />
        </motion.div>
        <Widget
            as={motion.section}
            transition={{ delay: 0.75, duration: 0.5 }}
            initial={{x:"-1000px"}}
            animate={{x:0}}
          >
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              {/* <p>Buonasera, Katuxa !! </p> */}
              <p>Quer dizer que você gosta da Beyoncé, é isso?</p>
              <p>Então se prepare provar os seus conhecimentos sobre essa grande diva que é nossa Queen Bey! </p>
            </Widget.Content>
          
          </Widget>
        
        <Widget
          as={motion.section}
            transition={{ delay: 0.75, duration: 0.5 }}
            initial={{x:"-1000px"}}
            animate={{x:0}}
        >
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(e) => { setName(e.target.value); }}
                placeholder="Diz aí seu nome?"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Bora,
                {' '}
                {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <motion.div
        animate={{ scale: 1 }} 
        initial={{ scale: 0 }} 
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Footer />
      </motion.div>
      <GitHubCorner projectUrl="https://github.com/IsadoraMuniz" />
    </QuizBackground>
  );
}
