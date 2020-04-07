import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-e1ccc.firebaseio.com/'
})