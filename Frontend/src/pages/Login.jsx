import { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom"

function Login() {
    const nav = useNavigate()
    const [message, setMessage] = useState('')
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('usuario : ' + usuario);
        console.log('password : ' + password);

        AuthService.login(usuario, password).then(
            () => {
                nav("/")
            }).catch(() => {
                setMessage('datos no validos')
            })
    }

    return (
        <>
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control"
                                                        id="inputText"
                                                        type="text"
                                                        placeholder="usuario"
                                                        value={usuario}
                                                        onChange={(e) => setUsuario(e.target.value)}
                                                    />
                                                    <label for="inputText">Usuario</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control"
                                                        id="inputPassword"
                                                        type="password"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <label for="inputPassword">Password</label>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                    <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <a className="small" href="password.html">Forgot Password?</a>
                                                    <input type="submit" className="btn btn-primary" value="Login" />
                                                </div>
                                            </form>

                                        </div>
                                        {message && (
                                            <p className="text-center p-2 bg-red-100 text-red-800 alert-danger">
                                                {message}
                                            </p>
                                        )}

                                        <div className="card-footer text-center py-3">
                                            <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2022</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
export default Login;