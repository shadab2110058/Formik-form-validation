import ReCAPTCHA from "react-google-recaptcha";

function onChange(value){
    console.log("captcha value:",value);
}
const Recaptcha = () =>
{
return (
    <ReCAPTCHA
    siteKey="6LcKGCQjAAAAAEKwGkpkude3jkmL9Sj8RKZ5GoGZ"
    onChange={onChange}
    />
)};
export default Recaptcha;