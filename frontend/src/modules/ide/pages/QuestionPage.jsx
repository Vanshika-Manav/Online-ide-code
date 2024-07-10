import Container from '@mui/material/Container';
import {Header} from '../../../shared/components/Header.jsx';
import Grid from '@mui/material/Grid';
import {Ide} from '../components/Ide.jsx';
import Question from '../components/Question.jsx';
export const QuestionPage = ()=>{
 
    return (
        <Container>
        <Header/>
        <Grid container spacing={0}>
        <Grid item xs={6}>
          <Question/>
        </Grid>
        <Grid item xs={6}>
          <Ide/>
        </Grid>
        </Grid>
        </Container>
    )
}