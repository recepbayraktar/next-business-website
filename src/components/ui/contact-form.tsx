import React from "react";
import { Input } from "./input";
import { Formik, Form, Field } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "./button";

const ContactForm = () => {
  const contactSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(500),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={toFormikValidationSchema(contactSchema)}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="flex flex-col gap-4">
        <Field
          component={FormInput}
          name="name"
          placeholder="Name"
          className="w-full"
        />

        <div className="flex gap-2">
          <input type="checkbox" />
          <span className="text-xs">
            I agree to the processing of my personal information
          </span>
        </div>

        <Button type="submit" className="w-full">
          Send
        </Button>
      </Form>
    </Formik>
  );
};

const FormInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: {
  field: any;
  form: {
    touched: any;
    errors: any;
  };
  props: any;
}) => (
  <div>
    <Input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="text-xs text-destructive">{errors[field.name]}</div>
    )}
  </div>
);

export default ContactForm;
