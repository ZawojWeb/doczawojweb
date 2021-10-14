import ArticleSite from '../components/ArticleSite'
import BackButton from '../components/BackButton'
import BigText from '../components/BigText'
import CoursContainer from '../components/CoursContainer'
import ParagraphTitle from '../components/ParagraphTitle'
import ParagraphWrapper from '../components/ParagraphWrapper'
import Paragraph from '../components/Paragraph'

const mvnUse = () => {
  return (
    <ArticleSite>
      <BackButton btntext='Powrót do menu' />
      <BigText text='Już niedługo pewnie w pt 15/10/2021 coś tutaj wejdzie' />
      <CoursContainer>
        <ParagraphWrapper>
          <ParagraphTitle content='Założenia i co zrobimy' />
          <Paragraph content='No chciałbym tutaj zrobić integrację maven + checkeStyle orac PMD. Całą integrację zrobię dla VSCode bo tylko lamusy korzystają z narzędzi od JetBrains. Albo banany. I jeszcze zrobimy prostą apkę TODO w javie aby zobaczyć działanie tych zacnych narzędzi.' />
        </ParagraphWrapper>
      </CoursContainer>
      <BackButton btntext='Powrót do menu' />
    </ArticleSite>
  )
}

export default mvnUse
