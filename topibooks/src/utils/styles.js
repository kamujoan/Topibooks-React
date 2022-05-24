import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
  },
  name: {
    fontWeight: 600,
  },
  author: {
    fontWeight: 500,
  },
  desc: {
    fontStyle: 'italic',
    fontSize: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: 15,
    textDecoration: 'underline',
    float: 'right',
    cursor: 'pointer',
    color: '#1b5e20',
    marginBottom: 20,
  },
  hr: {
    color: '#eceff1',
  },
  href: {
    textDecoration: 'none',
  },
  booktitle: {
    fontSize: 11,
    maxWidth: 100,
    fontWeight: 600,
    margin: 5,
    color: '#212121',
    display: 'inline-block',
    textOverflow: 'ellipsis',
    overflow: 'hidden !important',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  },
  bookauthor: {
    fontSize: 11,
    maxWidth: 100,
    fontWeight: 500,
    marginLeft: 5,
    color: '#263238',
    display: 'inline-block',
    textOverflow: 'ellipsis',
    overflow: 'hidden !important',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  },
  photo: {
    width: 95,
  },
  photoafrican: {
    width: 100,
  },
  pic: {
    width: 95,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
});

export default useStyles