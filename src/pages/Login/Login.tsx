import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Link from "../../components/Link/Link";
import Logo from "../../components/Logo/Logo";
import Select, { selectOption } from "../../components/Select/Select";

const options: selectOption[] = [
  { label: "claro", value: "light" },
  { label: "oscuro", value: "dark" },
  { label: "verde", value: "green" },
];

const Login = () => {
  return (
    <div>
      <div>
        <Select options={options} ></Select>
        <Logo></Logo>
        <Input></Input>
        <Input></Input>
        <Button></Button>
        <Link></Link>
      </div>
    </div>
  );
};

export default Login;
