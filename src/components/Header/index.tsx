import { Container, Content, First, Last, Percent } from "./styles";
import * as yup from "yup";
import { Form, Field, Formik } from "formik";

const schema = yup.object().shape({
  firstName: yup.string().required("Campo Obrigatório!"),
  lastName: yup.string().required("Campo Obrigatório!"),
  percent: yup.number().required("Campo Obrigatório!"),
});
export function Header() {  
    const onSubmit = (data) => console.log(data);
    return (
      <Container>
        <Content>        
          <Formik onSubmit={onSubmit}
            validationSchema={schema}
            initialValues={{
              firstName: "",
              lastName: "",
              percent: "",
            }}
          >
            {({ errors }) => ( 
              <Form>                 
                <Field name="firstName" type="text"
                  placeholder="First name"
                /> 
                <Field name="lastName" type="text"
                  placeholder="Last name"
                />                    
                <Field name="percent"
                  type="number"
                  placeholder="Participation"
                />                    
                <button 
                  type="submit"
                >
                  SEND
                </button>
                {errors.firstName && (
                  <First>
                    {errors.firstName}
                  </First>
                )}
                {errors.lastName && (
                  <Last className="message">
                    {errors.lastName}
                  </Last>
                )}
                {errors.percent && (
                  <Percent className="message">
                    {errors.percent}
                  </Percent>
                )}
              </Form>
           )}           
          </Formik>                   
        </Content>
      </Container>
    );
}