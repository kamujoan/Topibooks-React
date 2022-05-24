import React from 'react';
import Layout from '../../components/Layout';
import {
  Card,
  Grid,
  List,
  ListItem,
  Typography,
  Button,
} from '@material-ui/core';
import useStyles from '../../utils/styles';
import data from '../../utils/data';
import { useParams } from 'react-router-dom';

export default function RomanceSlug() {
  const { slug } = useParams();
  const book = data.romance.find((a) => a.slug === slug);
  const classes = useStyles();
  if (!book) {
    return <div>Book not Found</div>;
  }

  return (
    <Layout title={book.name}>
      <Grid className={classes.section} container spacing={1}>
        <Grid item md={3} xs={3}>
          <img
            src={book.photo}
            alt={book.name}
            width={100}
            height={150}
            layout="responsive"
          ></img>
        </Grid>
        <Grid item md={3} xs={9}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {book.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component="h2" variant="h2">
                {book.author}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.desc}>{book.desc}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>DOWNLOAD:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{book.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={12}>
                    <a className={classes.href} href={book.pdf}>
                      <Button fullWidth variant="contained" color="primary">
                        pdf
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                <Grid container>
                  <Grid item xs={12}>
                    <a className={classes.href} href={book.epub}>
                      <Button fullWidth variant="contained" color="primary">
                        epub
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
