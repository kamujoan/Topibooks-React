import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import data from '../utils/data';
import useStyles from '../utils/styles';

export default function Home() {

  const classes = useStyles();
  return (
    <div>
      <Layout>
        <div>
          <span className={classes.title}>All Top Picks</span>
          <Link to="/all-books" className={classes.subtitle}>
            View all
          </Link>
          <Grid container spacing={3}>
            {data.books.map((book) => (
              <Grid item md={1} xs={3} key={book.name}>
                <Card className={classes.pic}>
                  <Link to={`/books/${book.slug}`}>
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
        <hr className={classes.hr} />
        <br />
        <div>
          <span className={classes.title}>Top Shelf</span>
          <Link to="/dystopian" className={classes.subtitle}>
            View all
          </Link>
          <Grid container spacing={3}>
            {data.shelf.map((book) => (
              <Grid item md={1} xs={3} key={book.name}>
                <Card className={classes.pic}>
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
        <hr className={classes.hr} />
        <br />
        <div>
          <span className={classes.title}>Children's Books</span>
          <Link to="/kids" className={classes.subtitle}>
            View all
          </Link>
          <Grid container spacing={3}>
            {data.kids.map((book) => (
              <Grid item md={1} xs={3} key={book.name}>
                <Card className={classes.pic}>
                  <Link to={`/kids/${book.slug}`}>
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
        <hr className={classes.hr} />
        <br />
      </Layout>
    </div>
  );
}


