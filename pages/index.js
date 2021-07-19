//import { ThemeProvider} from 'emotion-theming'
import styled from '@emotion/styled'
import Post from '../components/Post';

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: lightgray;

  h3 {
    margin-top: 0;
    padding-top: 15px;
  }
`



const Home = ({ posts }) => {
  console.log(posts)
  return (
    <div>
      <Header><h3>Ukázka webu Prahy 6 - komunikace headless CMS</h3></Header>

      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>

  )
}

export async function getServerSideProps(){
  const url = `http://167.99.134.160:1337/posts`
  const res = await fetch(url)
  const data = await res.json()
  return {
    props: {
      posts: data
    }
  }
}

export default Home