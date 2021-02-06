import axios from 'axios';
import { MainLayout } from '../../components/MainLayout';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';

export default function NewPost() {
  const addPost = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (event.target[0].value && event.target[1].value) {
      const newPost = {
        title: event.target[0].value,
        body: event.target[1].value,
      };
      console.log(newPost);
      axios.post('https://simple-blog-api.crew.red/posts', newPost);
    }
    event.target[0].value = '';
    event.target[1].value = '';
  };

  return (
    <MainLayout title={'Create new post'}>
      <Form onSubmit={addPost}>
        <Input type='text' placeholder='Title' width='12rem' />
        <TextArea width='36rem' placeholder='Body' />
        <Button>Create post</Button>
      </Form>
    </MainLayout>
  );
}
