import LoginSaga from '../client/app/containers/Login/sagas'

export default function* Sagas() {
    yield [
        LoginSaga()
    ]
}