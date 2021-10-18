import ArticleSite from '../components/ArticleSite'
import BackButton from '../components/BackButton'
import Bold from '../components/Bold'
import CoursContainer from '../components/CoursContainer'
import ParagraphTitle from '../components/ParagraphTitle'
import ParagraphWrapper from '../components/ParagraphWrapper'
import SubTitle from '../components/SubTitle'
import Paragraph from '../components/Paragraph'
import CoursImage from '../components/CoursImage'
import UrlLink from '../components/UrlLink'

const mvnUse = () => {
  return (
    <ArticleSite>
      <BackButton btntext='Powrót do menu' />
      <CoursContainer>
        <ParagraphWrapper>
          <ParagraphTitle content='Zrobię ale na ten moment nie.' />
          <Paragraph content='Sory ale dziś nie mam weny i mało czasu aby zrobić ten kurs. Ale spoko nie zostawię cb. Masz niżej linki które są dobre i pomogą ci zrozumieć listę 1' />
           <UrlLink content="Wszystko co musisz wiedzieć o MVN" link="https://kursjava.com/podstawy-maven/"/><br />
           <UrlLink content="Jak dodać PMD to projektu" link="https://www.baeldung.com/pmd"/><br />
           <UrlLink content="Jak dodać CheckeStyles do projektu" link="https://www.baeldung.com/checkstyle-java"/> <br />
           <UrlLink content="Git i GitHub super poradnik" link="https://bedeprogramistka.pl/jak-uzywac-git-huba-instalacja-i-obsluga-gita-krok-po-kroku/"/><br />
           <Paragraph content="A co do samego projektu ja zrobiłem prostą konsolową apkę TODO" /><br />
        </ParagraphWrapper>
      </CoursContainer>
      <BackButton btntext='Powrót do menu' />
    </ArticleSite>
  )
}

export default mvnUse
