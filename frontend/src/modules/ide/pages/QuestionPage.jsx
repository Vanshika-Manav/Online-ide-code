import Container from '@mui/material/Container';
import {Header} from '../../../shared/components/Header.jsx';
import Grid from '@mui/material/Grid';
import {Ide} from '../components/Ide.jsx';
import QuestionDetail from '../components/QuestionDetail.jsx';
import '../../user/css/userPage.css';
export const QuestionPage = ()=>{
 
    return (
      <div className='container'>
        <Container>
        <Header/>
        <Grid container spacing={0}>
        <Grid item xs={6}>
          {/* Question - problem statements */}
          <QuestionDetail/>
        </Grid>
        <Grid item xs={6}>
          <Ide/>
        </Grid>
        </Grid>
        </Container>
        </div>
    )
}