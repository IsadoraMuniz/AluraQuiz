/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { func } from 'prop-types';
import Lottie from 'react-lottie';
import * as loadingAnimation from '../src/components/Animations/loading_2.json';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';


import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import AlternativesForm from '../src/components/AlternativesForm';


const EndImage = (totalResult) =>{
  return (
    totalResult <= 4 ? (
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src="https://i.gifer.com/Ycn9.gif"
      />
    ) : totalResult >= 5 && totalResult <= 7 ? (
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src="https://i.gifer.com/N5rT.gif"
      />
    ) : (
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          width:'450px',
          objectFit: 'cover',
        }}
        src="https://media3.giphy.com/media/psuNQ0XMaYe1a/giphy.gif"
      />
    )

  );
}

const EndMessage = (totalResult) =>{
  return (
      totalResult <= 4 ? (
      <p>
        {' '}
        Precisa melhorar, em ?!
        <br />
        {' '}
        Dá uma pesquisadinha a mais, garanto
        que vai valer a pena
      </p>
    ) : totalResult >= 5 && totalResult <= 7 ? (
      <p>
        {' '}
        Nada mal !!
        <br />
        {' '}
        Você tá indo pelo caminho certo, mais um pouquinho já
        pode pegar a carteirinha de fã!
      </p>
    ) : (
      <p>
        {' '}
        Ora, ora, encontramos um fã de verdade !!!
        <br />
        {' '}
        Você realmente tá por dentro da vida da diva !
      </p>
    )

  );
}

const defaultOptions = {
  loop:true,
  autoplay:true,
  animationData: loadingAnimation.default
};

function ResultWidget({ results }) {
  const router = useRouter();
  const name = router.asPath;
  const finalName = name.replace('/quiz?name=', '');
  const totalResult = results.filter((x) => x).length;
  return (
    <Widget>
      <Widget.Header>
        <h2>Sua pontuação é...</h2>
      </Widget.Header>
      <Widget.Header>
        {EndImage(totalResult)}
      </Widget.Header>

      <Widget.Content>
        <p>
          {finalName.charAt(0).toUpperCase() + finalName.slice(1)}
          , você acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)} */}
          {totalResult}
          {' '}
          perguntas
        </p>
        <ul>
          {EndMessage(totalResult)}
          {results.map((result, index) => (
            <li key={`result__${result}`}>

              {/* #
              {index + 1}
              {' '}
              Resultado:
              {result === true
                ? 'Acertou'
                : 'Errou'} */}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

    <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
      <Lottie options={defaultOptions} />
    </Widget.Content>

      {/* <Widget.Content>
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src="https://i.pinimg.com/originals/7e/1b/98/7e1b9840eed104a23db7b64998bba60c.gif"
        />
      </Widget.Content> */}
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {/* <QuizLogo /> */}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
