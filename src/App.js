import './App.css';
import Form from './components/Form/Form';

const formConfig = {
  title: "Profile Setup",
  steps: [{
      title: 'Personal Details',
      config: [{
          type: 'text',
          label: 'First Name',
          placeholder: 'First Name',
          value: '',
          error: '',
          name: 'firstName',
          isMandatory: true
      }, {
        type: 'text',
        label: 'Last Name',
        placeholder: 'Last Name',
        value: '',
        error: '',
        name: 'lastName',
        isMandatory: true
    },]
  }, {
      title: 'Interests',
      config: [{
          type: 'text',
          label: 'Movie',
          placeholder: 'Movie',
          value: '',
          error: '',
          name: 'movie',
          isMandatory: true
      }, {
        type: 'text',
        label: 'Song',
        placeholder: 'Song',
        value: '',
        error: '',
        name: 'song',
        isMandatory: true
    },]
  }, {
      title: 'Account',
      config: [{
          type: 'text',
          label: 'Email',
          placeholder: 'Email',
          value: '',
          error: '',
          name: 'email',
          isMandatory: true
      }, {
          type: 'password',
          label: 'Password',
          placeholder: 'Password',
          value: '',
          error: '',
          name: 'password',
          isMandatory: true
      },]
  }]
}

function App() {

  const submitHandler = () => {
    // submit form
  }

  return (
    <div className="App">
      <Form config={formConfig} submitHandler={submitHandler}  />
    </div>
  );
}

export default App;
