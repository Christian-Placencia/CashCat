import {auth} from '../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
    };
    return (
        <div>
            <input 
                placeholder = "Correo" 
                onChange = {(e) => setEmail(e.target.value)}
            />    
            <input 
                placeholder = "Contraseña" 
                type = "password"
                onChange = {(e) => setPassword(e.target.value)}
            />   
            <button onClick = {signIn}>Iniciar Sesión</button>
        </div>
    )
}