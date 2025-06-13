import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props: { setName: (name: string) => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch('https://localhost:7237/api/Auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        const content = await response.json();
        props.setName(content.name);
        console.log("Home: " + content.name);
        navigate('/');
        window.location.reload();
    };

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <input type="email"
                    className="form-control"
                    placeholder="Email address"
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    );
};

export default Login;