import './index.css';
import SignupForm from '../../components/signup-form';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { setTitle } from '../../util/setTitle';

const SignupPage = () => {
    setTitle('Đăng ký');
    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="signup">
                    <div className="form-title">
                        <h2>Đăng ký</h2>
                    </div>
                    <div className="signup-form">
                        <SignupForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignupPage;
