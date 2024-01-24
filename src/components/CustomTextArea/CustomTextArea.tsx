import {Form as BootstrapForm} from "react-bootstrap";

const CustomTextarea = ({...field}) => (<BootstrapForm.Control {...field} as="textarea" rows={2} />);

export default CustomTextarea;
