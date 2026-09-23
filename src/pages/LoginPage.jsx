import { getKakaoAuthorizeUrl } from "../lib/kakao";

function LoginPage() {
    const handleKakaoLogin = () => {
        window.location.href = getKakaoAuthorizeUrl();
    }

    return (
        <div style={{ maxWidth: 360, margin: "80px auto", textAlign: "center" }}>
            <h2>카카오 로그인 실습</h2>
            <button onClick={handleKakaoLogin} style={{ padding: 12, width: "100%"}}>
                카카오로 시작하기
            </button>
        </div>
    )
}

export default LoginPage;