import React, { useState } from 'react';

const RegisterPage: React.FC = () => {
    const [render, setRender] = useState(false);

    const renderMessage = () => {
        if (render) {
            return <span>message</span>
        }
    }

    return (
        <div>
            <button onClick={() => setRender(true)}>
                test
            </button>
            {renderMessage()}
        </div>
    )
}

export default RegisterPage;