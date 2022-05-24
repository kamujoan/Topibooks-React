import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import data from '../utils/data';
import useStyles from '../utils/styles';

export default function All() {
  const classes = useStyles();
  return (
    <div>
      <Layout>
        <div>
          <h3>Shelf</h3>
          <Grid container spacing={3}>
            {data.shelf.map((book) => (
              <Grid item md={2} xs={3} key={book.name}>
                <Card className={classes.photo}>
                  <Link to={`/shelf/${book.slug}`}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={book.photo}
                        title={book.name}
                      ></CardMedia>
                    </CardActionArea>
                    <span className={classes.booktitle}>{book.name}</span>
                    <span className={classes.bookauthor}>{book.author}</span>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Layout>
    </div>
  );
}
