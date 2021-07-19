import styled from '@emotion/styled'
import Image from 'next/image'

function Post({post}){
  const url = `http://167.99.134.160:1337`
  return (
    <Poststyled>
      <div className="poster">
        <Image src={url + post.image[0].url} alt="" width={800} height={520}/>
      </div>
      <div className="body">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </Poststyled>
  )
}

const Poststyled = styled.div`
  width: 800px;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);

  .body{
    padding: 20px;
    h2 {
      margin-bottom: 20px;
    }
    p {
      color: #666666;
      line-heigth: 1.5;
    }
  }
`

export default Post